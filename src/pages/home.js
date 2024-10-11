import React, { useState } from "react";
import "./home.css";
import Loader from "../components/loader";
import uploadIcon from "../assets/images/upload.png";
import process from "../assets/images/Secure data-pana 1.jpg";
import ChequeDetails from "../components/ChequeDetails";
import StepProcess from "../components/StepProcess";
import Button from "../components/Button";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showChequeDetails, setShowChequeDetails] = useState(false);

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      handleUpload();
    }
  };

  // Handle drag and drop file
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      handleUpload();
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate an upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
      setIsProcessed(true);
      // alert('Image uploaded successfully!');
    }, 3000); // Simulated upload delay of 3 seconds
  };

  const handleProcessClick = () => {
    setShowChequeDetails(true);
  };

  const handleBackClick = () => {
    setShowChequeDetails(false); // Reset state to show upload buttons again
    setSelectedFile(null); // Optionally reset selected file
    setIsUploaded(false);
    setIsProcessed(false);
    setIsUploading(false);
  };

  return (
    <div className="container">
      <h1 className="Heading">AI-Driven Cheque Mate</h1>
      <div className="Rectangle2">
        {/* <StepProcess /> */}
        <div className="btn-div">
          <Button className="btn-square">Upload</Button>
          <Button className="btn-square">Process</Button>
          <Button className="btn-square">Verify</Button>
        </div>
        <div className="box">
          <div className="upload-section">
            {isUploading ? (
              <div className="uploading-loader">
                <div className="loader">
                  <Loader />
                </div>
                <p>Uploading image...</p>
              </div>
            ) : selectedFile ? (
              <div className="uploaded-image">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Uploaded File"
                  className="uploaded-file-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ) : (
              <div
                className="upload-box"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <img
                  src={uploadIcon}
                  alt="Upload Icon"
                  className="upload-icon"
                />
                <p>Drag & drop to upload</p>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
              </div>
            )}

            {!showChequeDetails && (
              <div className="button-container">
                <button
                  className={`upload-button ${
                    isUploading || isUploaded ? "disabled red" : ""
                  }`}
                  onClick={handleUploadClick}
                  disabled={isUploading || isUploaded}
                >
                  Upload
                </button>
                <button
                  className={`process-button ${isProcessed ? "active" : ""}`}
                  onClick={handleProcessClick}
                  disabled={!isProcessed}
                >
                  Process
                </button>
              </div>
            )}

            {showChequeDetails && (
              <button className="back-button" onClick={handleBackClick}>
                Back
              </button>
            )}
          </div>

          <div className="process-img">
            {showChequeDetails ? (
              <ChequeDetails showChequeDetails={showChequeDetails} />
            ) : (
              <img src={process} className="process-img" alt="Process Steps" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
