import React, { useState } from 'react';

const BettingForm = () => {
    const [team, setTeam] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit bet to backend
        fetch('/api/bet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ team, amount }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle response
            console.log(data);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Place Your Bet</h2>
            <label>
                Team:
                <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} required />
            </label>
            <label>
                Amount:
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </label>
            <button type="submit">Bet</button>
        </form>
    );
};

export default BettingForm;
