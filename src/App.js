import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import Product from './Components/Views/Product';

function App() {
  return (
    <div className="relative p-10 min-h-screen">
    

      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        
        <Footer />
      </Router>
  
      

      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
