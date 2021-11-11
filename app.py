import pickle
from sklearn.ensemble import RandomForestRegressor
from flask import Flask, render_template, request
import numpy as np

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
def server(path):
    return render_template('index.html')

loaded_model = pickle.load(open('final_model_cars.pkl', 'rb'))
"""arr = list(map(float, input().split()))
loaded_model.predict([arr])
print(arr)"""

def calc(data):
    #separate data
    year = data['year']
    mileage = data['mileage']
    tax = data['tax']
    mpg = data['mpg']
    engine_size = data['engine']
    fuel_type = data['fuel_type']
    transmission = data['transmission']
    brand = data['brand']
    
    diesel = 0;
    electric = 0;
    hybrid = 0;
    other_fuel = 0;
    petrol = 0;

    if fuel_type == 'Diesel':
        diesel = 1
    elif fuel_type == 'Electric':
        electric = 1
    elif fuel_type == 'Hybrid':
        hybrid = 1
    elif fuel_type == 'Other':
        other_fuel = 1
    elif fuel_type == 'Petrol':
        petrol = 1
    
    automatic = 0;
    manual = 0;
    other_transmission = 0;
    semi_automatic = 0;

    if transmission == 'Automatic':
        automatic = 1
    elif transmission == 'Manual':
        manual = 1
    elif transmission == 'Other':
        other_transmission = 1
    elif transmission == 'Semi-automatic':
        semi_automatic = 1
    

    audi = 0;
    bmw = 0;
    hyundai = 0;
    mercedes = 0;
    toyota = 0;

    if brand == 'Audi':
        audi = 1
    elif brand == 'BMW':
        bmw = 1
    elif brand == 'Hyundai':
        hyundai = 1
    elif brand == 'Mercedes':
        mercedes = 1
    elif brand == 'Toyota':
        toyota = 1
   
    #convert to numpy array
    car_data = (np.array([float(year), float(mileage), float(tax), float(mpg), float(engine_size), float(diesel), float(electric), float(hybrid), float(other_fuel), float(petrol), float(automatic), float(manual), float(other_transmission), float(semi_automatic), float(audi), float(bmw), float(hyundai), float(mercedes), float(toyota)]))
    car_data = car_data.reshape(1, -1)
    #print(db_data.shape)
    #calculate
    return loaded_model.predict(car_data)

@app.route('/submit_form', methods=['POST'])
def submit_form():
    data = request.form.to_dict()
    calc(data)
    result = calc(data)
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)