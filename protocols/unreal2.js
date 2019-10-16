const Core = require('./core');

class Unreal2 extends Core {
    constructor() {
        super();
        this.encoding = 'latin1';
    }
    async run(state) {
        {
            const b = await this.sendPacket(0, true);
            const reader = this.reader(b);
            state.raw.serverid = reader.uint(4);
            state.raw.ip = this.readUnrealString(reader);
            state.gamePort = reader.uint(4);
            state.raw.queryport = reader.uint(4);
            state.name = this.readUnrealString(reader, true);
            state.map = this.readUnrealString(reader, true);
            state.raw.gametype = this.readUnrealString(reader, true);
            state.raw.numplayers = reader.uint(4);
            state.maxplayers = reader.uint(4);
            this.readExtraInfo(reader, state);
        }

        {
            const b = await this.sendPacket(1,true);
            const reader = this.reader(b);
            state.raw.mutators = [];
            state.raw.rules = {};
            while(!reader.done()) {
                const key = this.readUnrealString(reader,true);
                const value = this.readUnrealString(reader,true);
                if(key === 'Mutator') state.raw.mutators.push(value);
                else if (key || value) state.raw.rules[key] = value;
            }
            if('GamePassword' in state.raw.rules)
                state.password = state.raw.rules.GamePassword !== 'True';
        }

        {
            const b = await this.sendPacket(2,false);
            const reader = this.reader(b);

            while(!reader.done()) {
                const player = {};
                player.id = reader.uint(4);
                if(!player.id) break;
                if(player.id === 0) {
                    // Unreal2XMP Player (ID is always 0)
                    reader.skip(4);
                }
                player.name = this.readUnrealString(reader,true);
                player.ping = reader.uint(4);
                player.score = reader.int(4);
                reader.skip(4); // stats ID

                // Extra data for Unreal2XMP players
                if(player.id === 0) {
                    const count = reader.uint(1);
                    for(let iField = 0; iField < count; iField++) {
                        const key = this.readUnrealString(reader,true);
                        const value = this.readUnrealString(reader,true);
                        player[key] = value;
                    }
                }

                if(player.id === 0 && player.name === 'Player') {
                    // these show up in ut2004 queries, but aren't real
                    // not even really sure why they're there
                    continue;
                }

                (player.ping ? state.players : state.bots).push(player);
            }
        }
    }

    readExtraInfo(reader,state) {
        this.debugLog(log => {
            log("UNREAL2 EXTRA INFO:");
            log(reader.uint(4));
            log(reader.uint(4));
            log(reader.uint(4));
            log(reader.uint(4));
            log(reader.buffer.slice(reader.i));
        });
    }

    readUnrealString(reader, stripColor) {
        let length = reader.uint(1), ucs2 = false;
        if(length >= 0x80) {
            length = (length&0x7f)*2;
            this.debugLog(log => {
                log("UCS2 STRING");
                log("UCS2 Length: " + length);
                log(reader.buffer.slice(reader.i,reader.i+length));
            });
            ucs2 = true;
        }

        // Killing floor sometimes injects 8 bytes of junk here
        if (reader.remaining() >= 8 && length >= 8) {
            const peek = reader.part(2);
            reader.skip(-2);
            if (peek[0] === 0x1b && peek[1] === 0x01) {
                reader.skip(8);
                length -= 8;
            }
        }

        let out = '';
        if (ucs2) {
            out = reader.string({encoding:'ucs2',length:length});
            this.debugLog("UCS2 String decoded: " + out);
        } else if (length > 0) {
            out = reader.string();
        }

        if(out.charCodeAt(out.length-1) === 0)
            out = out.substring(0,out.length-1);

        if(stripColor)
            out = out.replace(/\x1b...|[\x00-\x1a]/g,'');

        return out;
    }

    async sendPacket(type,required) {
        const outbuffer = Buffer.from([0x79,0,0,0,type]);

        const packets = [];
        return await this.udpSend(outbuffer,(buffer) => {
            const reader = this.reader(buffer);
            const header = reader.uint(4);
            const iType = reader.uint(1);
            if(iType !== type) return;
            packets.push(reader.rest());
        }, () => {
            if(!packets.length && required) return;
            return Buffer.concat(packets);
        });
    }
}

module.exports = Unreal2;
