
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number; 
    limit?: number;
}

export class CreateTable implements CreateTableUseCase{

    constructor(){

    }

    execute({ base, limit = 10 }: CreateTableOptions): string{

        let data: string = ''
        
        for( let i = 1; i <= limit; i++ ){
            const resultado: number = base * i
        
            // if( !showTable ) break; 
        
            data += `${ base } x ${ i } = ${ resultado } \n`
        }

        return data
    }
}