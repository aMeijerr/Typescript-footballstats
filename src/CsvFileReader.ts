import fs from 'fs';


export class CsvFileReader {
    data: string[][] = [];
    
    constructor(public filename: string){}

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

    }
}