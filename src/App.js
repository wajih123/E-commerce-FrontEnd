import React, { Component } from 'react';
import Categories from "../src/pages/categories/index";
import './App.css';
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";
import Products from './pages/products';


class App extends Component {

  render() {
   
    return (
      <Router>
      <div className="App">
      <ul>
        <li>
        
      <NavLink to="/" exact activeStyle={ {color:'red'}}>Home </NavLink>
      </li>
      <li>
      <NavLink to="/categories"  exact activeStyle={ {color:'red'}}>categories</NavLink>
      
      </li>
      <li>
      <NavLink to="/products" exact activeStyle={ {color:'red'}}>products</NavLink>
      </li>
      </ul>
<Route path="/" exact strict render ={
  ()=>{
    return ( <h1>welcome home</h1>);
  }
}/>

<Route path="/products" exact strict  component={Products}
/>
<Route path="/categories" exact strict  component={Categories}
/>

      </div>
      </Router>

    );
  }
}

export default App;
