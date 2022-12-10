import React from "react";

function Slides() {
  return (
    <>
      <section id="home">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item item1 active" data-bs-interval="10000">
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            </div>
            <div className="carousel-item item2" data-bs-interval="2000">
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            </div>
            <div className="carousel-item item3">
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Slides