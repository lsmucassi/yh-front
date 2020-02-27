Creating a Python api using PyMongo, Flask and MondoDb

1. Install Flask
2. Install dnspython to interpret the MongoDB connection string

Below is the structure (in JSON that will be brought back by all the endpoints)

SCHEMAS BUILT BASED ON STUBBED DATA FROM FE

[GET]
/continents (Retrieve all available continents)
[
    {
        id: 0000,
        name: XXXX,
        places: 00,
        tours: 00
    },
    {
        id: 1111,
        name: YYYY,
        places: 00,
        tours: 00
    }
]

/continents/places (Retrieve places)

[
    {
        id: 0000,
        name: XXXX,
        continent: XXXXXXXX // From request body
        price: 00.00, // Currency to be determined later
        accommodation: { // Will require clarity on object fields
            type: 00,
            duration: 00 // Length of stay
            facilities: XXXX,
            travel: XXXX
        }
    }
]

/continents/tours (Retrieve tours)

[
    {
        id: 0000,
        name: XXXX,
        continent: XXXXXXXX // From request body
        price: 00.00, // Currency to be determined later
        accommodation: { // Will require clarity on object fields
            duration: 00 // Length of stay
            facilities: [],
            travel: []
        }
    }
]

[POST]

BOOKIGS