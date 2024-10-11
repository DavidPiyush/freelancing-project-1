import "./StepProcess.css";

function StepProcess() {
  return (
    <section>
      <div className="steps">
        <div className="numbers">
          <h5 className="step-1 fill-circle">Upload</h5>
          <h5 className="step-2">verify</h5>
          <h5 className="step-3">OCR</h5>
          <h5 className="step-4">Signatures</h5>
          <h5 className="step-5">Finished</h5>
        </div>
        {/* <p className="circle"></p> */}
      </div>
    </section>
  );
}

export default StepProcess;
