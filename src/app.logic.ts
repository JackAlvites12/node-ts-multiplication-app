import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

console.log( yarg )

const { b: base, l: limit, s: showTable } = yarg

let data: string = ''; 
const header: string =  `
=============================
TABLA DEL ${ base }
=============================
`
               
for( let i = 1; i <= limit; i++ ){
    const resultado: number = base * i

    if( !showTable ) break; 

    data += `${ base } x ${ i } = ${ resultado } \n`
}



 



