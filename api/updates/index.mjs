import * as fs from 'fs';
import path from 'path';

async function getUpdate(id) {
  const data = [
    {
        "id": "1",
        "version": "Version 1.0",
        "date": "02 Nov",
        "description": "the first official Release",
        "changes": [
            { "id": 1, "description": "Welcome to the official Release of CubeScript 1.0!" },
            { "id": 2, "description": "This introduces the CSVM/CubeScript Virtual Machine." },
            { "id": 3, "description": "This First version introduces the Basic Stuff Required to work with CubeScript" }
        ]
        
        
    },
    {
        "id": "2",
        "version": "Version 1.1",
        "date": "05 Nov",
        "description": "This release includes some Bug Fixes and implements a new feature",
        "changes": [
            { "id": 1, "description": "CubeScript Project Creation version 1.0" },
            { "id": 2, "description": "This version of the CPC unfortunatly only creates a csproj file and a cusp file for making a simple Console based app." },
            { "id": 3, "description": "Hopefully the Next version improves the CPC enough that it allows you to create more then one Project." }
        ]
        
        
    },
    {
        "id": "3",
        "version": "Version 1.1",
        "date": "05 Nov",
        "description": "This release includes some Bug Fixes and implements a new feature",
        "changes": [
            { "id": 1, "description": "CubeScript Project Creation version 1.0" },
            { "id": 2, "description": "This version of the CPC unfortunatly only creates a csproj file and a cusp file for making a simple Console based app." },
            { "id": 3, "description": "Hopefully the Next version improves the CPC enough that it allows you to create more then one Project." }
        ]
        
        
    },
    {
        "id": "4",
        "version": "Version 1.1",
        "date": "05 Nov",
        "description": "This release includes some Bug Fixes and implements a new feature",
        "changes": [
            { "id": 1, "description": "CubeScript Project Creation version 1.0" },
            { "id": 2, "description": "This version of the CPC unfortunatly only creates a csproj file and a cusp file for making a simple Console based app." },
            { "id": 3, "description": "Hopefully the Next version improves the CPC enough that it allows you to create more then one Project." }
        ]
        
        
    },
    {
        "id": "5",
        "version": "Version 1.1",
        "date": "05 Nov",
        "description": "This release includes some Bug Fixes and implements a new feature",
        "changes": [
            { "id": 1, "description": "CubeScript Project Creation version 1.0" },
            { "id": 2, "description": "This version of the CPC unfortunatly only creates a csproj file and a cusp file for making a simple Console based app." },
            { "id": 3, "description": "Hopefully the Next version improves the CPC enough that it allows you to create more then one Project." }
        ]
        
        
    },
    {
        "id": "6",
        "version": "Version 1.1",
        "date": "05 Nov",
        "description": "This release includes some Bug Fixes and implements a new feature",
        "changes": [
            { "id": 1, "description": "CubeScript Project Creation version 1.0" },
            { "id": 2, "description": "This version of the CPC unfortunatly only creates a csproj file and a cusp file for making a simple Console based app." },
            { "id": 3, "description": "Hopefully the Next version improves the CPC enough that it allows you to create more then one Project." }
        ]
        
        
    }
]

  const result = data.find((update) => String(update.id) === id);
  if (!result) {
    return `No updates found for id: ${id}`;
  }

  return result;
}

export default async (request, response) => {
  try {
    const query = request.query.query;
    const result = await getUpdate(query);
    if (!result) {
      response.status(404).send({ error: 'No updates found for this id' });
    } else {
      response.setHeader('Content-Type', 'application/json');
      response.status(200).send(JSON.stringify(result, null, 4));
    }
  } catch (error) {
    response.status(500).send({ error: 'An error occurred while processing your request' });
  }
};
