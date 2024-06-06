import React, { useState, useEffect } from 'react';
import SofaScore from './SofaScore';
import BettingForm from './BettingForm';

const App = () => {
    const [standings, setStandings] = useState([]);
    
    useEffect(() => {
        // Fetch standings if necessary, or rely on SofaScore widget
    }, []);

    return (
        <div className="app">
            <h1>Betting Website</h1>
            <SofaScore />
            <BettingForm />
        </div>
    );
};

export default App;
