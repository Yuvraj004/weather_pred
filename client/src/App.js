import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react';
function App() {
  const  [landavgtemp,setLandAvgTemp] = useState(0);
  const  [landmaxtemp,setLandMaxTemp] = useState(0);
  const  [landmintemp,setLandMinTemp] = useState(0);

  function CallBackend(e) {
    e.preventDefault();
    fetch('http://localhost:5000/predict_weather')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  return (
    <div className="App main-bg">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            Bootstrap
          </a>
        </div>
      </nav>
      <div>
        <div class="login-container text-c animated flipInX">
          <div>
              <h1 class="logo-badge text-whitesmoke"><span class="fa fa-user-circle"></span></h1>
          </div>
              <h3 class="text-whitesmoke">Enter Data for weather Prediction</h3>
              <p class="text-whitesmoke">FORM</p>
          <div class="container-content">
              <form class="margin-t">
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="LandAvgTemperature" required="" value={landavgtemp} onChange={(e)=>e.target.value}/>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="LandMaxTemperature" required="" value={landmaxtemp} onChange={(e)=>e.target.value}/>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="LandMinTemperature" required="" value={landmintemp} onChange={(e)=>e.target.value}/>
                  </div>
                  <button type="submit" class="form-button button-l margin-b" onSubmit={(e) => {CallBackend(e)}}>Predict</button>
  
                  <a class="text-darkyellow" href="/"><small>Forgot your password?</small></a>
                  <p class="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                  <a class="text-darkyellow" href="/"><small>Sign Up</small></a>
              </form>
              <p class="margin-t text-whitesmoke"><small> Yuvraj Chaturvedi &copy; 2024</small> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
