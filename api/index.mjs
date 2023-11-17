// when GET requested, return a list of all the routes in the API directory in json format


export default async (request, response) => {
    //return json
    response.setHeader('Content-Type', 'application/json');

    const routes = 
        [
            {
                "path": "/api",
                "description": "This page"
            },
            {
                "path": "/api/latest",
                "description": "Get the latest update id"
            },
            {
                "path": "/api/updates",
                "description": "Get all updates based on an id passed to it by ?query=<number>"
            },
        ]

    response.status(200).json({ routes });
};
