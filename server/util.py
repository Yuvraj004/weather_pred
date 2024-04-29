import json
import pickle
import numpy as np
import pandas as pd
data_columns=None
model = None

def get_data_columns():
    return data_columns

def load_saved_artifacts():
    global data_columns
    global model
    with open('./artifacts/columns.json') as j_file:
        data_columns = json.load(j_file)['data_columns']
    j_file.close()
    with open('./artifacts/weather_prediction_model.pickle','rb') as f:
        model = pickle.load(f)
    f.close()

    

def predict_weather(landavgTemp:list,landmaxTemp:list,landminTemp:list):

    new_data = pd.DataFrame({
        "LandAverageTemperature":landavgTemp ,
        "LandMaxTemperature": landmaxTemp,
        "LandMinTemperature": landminTemp,
        
    })  # Adjust values as needed for your prediction

    predictions = model.predict(new_data)
    print(predictions)   


if __name__=="__main__":
    load_saved_artifacts()
    # print(get_data_columns())
    predict_weather([58.2, 61.5, 55.8],[72.4, 78.3, 69.1],[44, 47.2, 42.5])