import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import DataInsert from './components/DataInsert'
import Help from './components/Help'
import Home from './components/Home'
import Navbar from './components/Navbar'
import View from './components/View'
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/View' element={<View></View>}>View</Route>
        <Route path='/ContactUs' element={<ContactUs></ContactUs>}>ContactUs</Route>
        <Route path='/DataInsert' element={<DataInsert></DataInsert>}>DataInsert</Route>
        <Route path='/Help' element={<Help></Help>}>Help</Route>
        
    </Routes>
    </>
  )
}

export default App

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/