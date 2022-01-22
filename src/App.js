import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Feed from './Components/Feed'
import PrivateRoute from './Components/PrivateRoute';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Switch>
          <PrivateRoute exact path="/" component={Feed}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
        </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
