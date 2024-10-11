import React from 'react';
import Loader from './loader'; // Ensure to import your Loader component

const FetchingLoader = ({ onBack, onContinue }) => {
  return (
    <div className="fetching-loader">
      <Loader />
      <p>Fetching OCR...</p>
      <div className="fetching-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="continue-button" onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default FetchingLoader;
