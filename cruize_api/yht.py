from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
import uuid
import bookings

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'Destinations'
app.config['MONGO_URI'] = 'mongodb+srv://william-phokompe:WilliamPhokompe@travellingcluster-heab2.mongodb.net/Destinations?retryWrites=true&w=majority'
mongo = PyMongo(app)
    
@app.route('/continents', methods=['GET'])
def get_all_continents():
    continent = mongo.db.Continents
    continents = []

    for cont in continent.find():
        continents.append({
            'id': cont['id'], 
            'name': cont['name'],
            'tours' : cont['tours'],
            'places': cont['places']
        })

    return jsonify({'result': continents})

@app.route('/continents/places', methods=['GET'])
def get_places():
    places = mongo.db.Places
    p = []

    for place in places.find():
        p.append({
            'id': place['id'],
            'name': place['name'],
            'continent': place['continent'],
            'price': place['damage'],
            'accommodation': {
                'type': place['accommodation']['type'],
                'nights': place['accommodation']['nights'],
                'facilities': place['accommodation']['facilities'],
                'travel': place['accommodation']['travel']
            }
        })
    return jsonify({'result': p})

@app.route('/continents/tours', methods=['GET'])
def get_tours():
    tours = mongo.db.Tours
    t = []

    for tour in tours.find():
        t.append({
            'id': tour['id'],
            'name': tour['name'],
            'continent': tour['continent'],
            'price': tour['damage'],
            'accommodation': {
                'duration': tour['accommodation']['duration'],
                'facilities': tour['accommodation']['facilities'],
                'travel': tour['accommodation']['travel']
            }
        })

    return jsonify({'result': t})

if __name__ == '__main__':
    app.run(debug=True)

    

# @app.route('/continents/create', methods=['POST'])
# def add_continent():
#     continent = mongo.db.Continents
#     id = str(uuid.uuid4())
#     name = request.json['name']
#     tours = request.json['tours']
#     places = request.json['places']
#     continent_id = continent.insert({
#         'id': id,
#         'name': name,
#         'tours': tours,
#         'places': places
#     })
#     new_continent = continent.find_one({'_id': continent_id})

#     return jsonify({
#         'result': {
#             'id': new_continent['id'],
#             'name': new_continent['name'],
#             'tours': new_continent['tours'],
#             'places': new_continent['places']
#         }
#     })