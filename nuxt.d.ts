type LogMessageType = undefined | null | 'warning' | 'error'
type LogMessage = [Date, string, LogMessageType]
type LogFn = (s: string) => void;
type PromiseFn = (a: unknown | PromiseLike) => any
interface MspData {
    type: 'bf' | 'qs' | 'kiss' | null,
    protocol_version: number
    api_version: string,
    batteryData: {
        cellCount: number,
        capacity: number,
        voltage: number,
        drawn: number,
        amps: number
    } | null,
    motorCount: number
}

interface EscData {
    isLoading: boolean;
    boot: number;
    eeprom_version: number;
    bootloader_version: number;
    firmware: {
        major: number;
        minor: number;
    };
    name: string;
    reversed: boolean;
}

interface FourWayResponse {
    command: number;
    address: number;
    ack: number;
    checksum: number;
    params: Uint8Array;
}

type SettingsType = 'select' | 'bool' | 'string' | 'number' | 'rtttl';
type SettingsSelectOptionsType = { label: string, value: numer };

interface HexData {
    address: number,
    bytes: number,
    data: number[]
}

interface Hex {
    data: HexData[],
    endOfFile: boolean,
    bytes: number,
    startLinearAddress: number
}

interface BlobFolderFile {
    name: string;
    url: string;
}

interface BlobFolder {
    name: string,
    files: BlobFolderFile[],
    children: BlobFolder[]
}

declare module 'bluejay-rtttl-parse' {
    export default class Rtttl {
        static fromBluejayStartupMelody(startUpMelody: Uint8Array, name?: string): string;
        static toBluejayStartupMelody(rtttl: string, length?: number): {
            data: Uint8Array,
            errorCodes: number[]
        };
    }
};