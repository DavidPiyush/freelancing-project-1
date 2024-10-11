import React from 'react';
import '../pages/home.css'; 

const ChequeDetails = ({ showChequeDetails }) => {
  return (
    <div className="cheque-details">
      <div className="cheque-status">
        <p>✔️ Cheque Verified</p>
        <p>✔️ Meezan Bank</p>
      </div>
      <h2>Cheque Details</h2>
      <p>Name: Roy Ang</p>
      <p>Amount: 12,345,678.00</p>
      <p>Date: 25 / 09 / 2012</p>
      <p>Acc #: PK40MEZN00000001123456702</p>
      <p>Acc title: null</p>
      <h3>Signatures</h3>
      <div className="signatures">
        <p>Drawer</p>
        <p style={{ marginRight: '20px' }}>__________________</p>
        <p>Payee</p>
        <p>__________________</p>
      </div>
    </div>
  );
};

export default ChequeDetails;
