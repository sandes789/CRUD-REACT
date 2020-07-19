import React, {useState} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import UserDetails from './components/UserDetails'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

function App() {
  const [state, setstate] = useState('')

  return (
    <div className={`App ${state}`}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user-details' ><UserDetails setstate={setstate}/></Route>
            <Route path='/add-user' component={AddUser} />
            <Route path='/edit-user/:id' component={EditUser} /> 
          </Switch>
          
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
