// when GET Requested, return a list of commands that you can call in json format

import { readdirSync } from 'fs';
import { join } from 'path';

export default async (request, response) => {
    try{

        const commands = [
            { name: '-compile', description: 'Compiles the Project and runs include for all' },
            { name: '-compout', description: 'Compiles the project without deleting the .cs files in the working directory' },
            { name: 'new', description: 'Creates a new project based on 2 types. executible or DLL' },
        ];
        response.status(200).json(commands);
    }
    catch(error){
        response.status(500).send({ error: 'An error occurred while processing your request' });
    }
}