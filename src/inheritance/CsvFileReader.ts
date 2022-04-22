import fs from 'fs';

// T är TypeOfData, en generic class som kan anpassas hos den funktion som skickar in data
export abstract class CsvFileReader<T> {
    data: T[] = [];
    
    constructor(public filename: string){}

    abstract mapRow(row: string[]): T;

    read():void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        //Skapar egna rader av all data
        .split('\n')
        //mapar varje array och drar en split mellan varje string och lägger till ett ','
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map(this.mapRow)
    }
}