import React, { useEffect } from 'react';

const SofaScore = () => {
    useEffect(() => {
        // Append the SofaScore script to the document
        const script = document.createElement('script');
        script.src = 'https://www.sofascore.com/api/v1/widget/standings.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up by removing the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="sofa-score">
            <h2>Current Standings</h2>
            <div data-type="standings" data-league-id="league-id" data-season-id="season-id"></div>
        </div>
    );
};

export default SofaScore;
