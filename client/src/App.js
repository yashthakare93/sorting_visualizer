import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SortingVisualizer from './Components/SortingVisualizer';
import LandingPage from './Pages/LandingPage';
import Contact from "./Components/Contact";
import './index.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/visualizer" element={<SortingVisualizer />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
