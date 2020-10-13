import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/Dashboard';
import PrivateRoute from '../src/routing/PrivateRoute';
//redux
import{Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import './App.css';
import setAuthToken from './utils/setAuthToken';


const App = () => {
  useEffect(()=>{
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  },[]);
  return(
  <Provider store={store}>
  <Router>
  <Fragment>
    <Navbar/>
    
    
    <section className="container">
    <Alert/>
      <Switch>
      <Route exact path='/' component={Landing} /> 
      <Route exact path='/register' component={Register}/>
      <Route exact path ='/login' component={Login}/> 
      <PrivateRoute exact path ='/dashboard' component={Dashboard}/> 
      </Switch>
    </section>
  </Fragment>
  </Router>
  </Provider>
  
)};

export default App;
