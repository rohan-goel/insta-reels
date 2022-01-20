import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
