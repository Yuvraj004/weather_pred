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

    

def predict_disease():
   
    # print(input_df)
    return model.predict(input_df)[0]


if __name__=="__main__":
    load_saved_artifacts()
    # print(get_data_columns())