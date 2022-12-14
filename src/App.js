import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/layout/Index';
import {Provider} from './context';

function App() {
  return (
    <Provider>
      <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Index/>}></Route>
          </Routes>
        </div>
      </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
