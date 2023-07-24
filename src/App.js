import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Page/Home';
import Posts from './Page/Posts';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navigation from './Component/Navigation';

function App() {
  return (
<>
<Router>
  <Navigation/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/post/:postId' element={<Posts/>}/>
  </Routes>
</Router>
</>
  );
}

export default App;
