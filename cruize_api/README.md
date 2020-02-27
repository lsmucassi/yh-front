Creating a Python api using PyMongo, Flask and MondoDb

1. Install Flask
2. Install dnspython to interpret the MongoDB connection string

Below is the structure (in JSON that will be brought back by all the endpoints)

Based on the layout of the FE this is the assumed structure of the data

[GET]
/continents (Retrieve all available continents)
[
    {
        id: 0000,
        name: XXXX
    },
    {
        id: 1111,
        name: YYYY
    }
]
/continents?id={id} (Retrieve a contient's details)

[POST]