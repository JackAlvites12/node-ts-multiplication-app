import fs from 'fs'

export interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    filename?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(){
        /** Repositorio a grabar  */
    }

    execute({ 
        fileContent, 
        fileDestination = 'outputs', 
        filename = 'table'}: Options 

    ): boolean {
        
        try {
            fs.mkdirSync(fileDestination, { recursive: true })
            fs.writeFileSync(`${ fileDestination }/${ filename }.txt`, fileContent )  
            return true;
    
        } catch (error) {
            console.log( error );
            return false
        }

    }

}