import logo from './logo.svg';
import './App.css';

function App() {
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
                      <input type="text" class="form-control" placeholder="LandAvgTemperature" required=""/>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="LandMaxTemperature" required=""/>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="LandMinTemperature" required=""/>
                  </div>
                  <button type="submit" class="form-button button-l margin-b">Predict</button>
  
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
