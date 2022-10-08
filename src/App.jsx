import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import { Provider } from 'react-redux'
import store from './Redux/store'

const App = () => {
    return (
        <div className='app'>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    )
}

export default App