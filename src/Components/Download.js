import React from "react";

function Download() {
  return (
    <section id="downloadApp">
      <div className="download-app">
        <p className="download-app-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="download-app-buttons">
          <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
          <button type="button" className="btn btn-outline-dark btn-lg download-button"><i className="fab fa-google-play"></i>Download</button>
        </div>
      </div>
    </section>
  )
}
export default Download
