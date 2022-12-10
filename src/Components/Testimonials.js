import React from "react";

function Testimonials() {
  return (
    <section id="testimonial">
      <div id="carouselExample2Interval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item testimonial-item  active" data-bs-interval="3000">
            <h2>⭐⭐⭐⭐⭐</h2>
            <p className="testimonial-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className="testimonial-img" src="http://127.0.0.1:5500/FlexStart/assets/img/testimonials/testimonials-3.jpg" alt="" />
          </div>
          <div className="carousel-item testimonial-item" data-bs-interval="3000">
            <h2>⭐⭐⭐⭐⭐</h2>
            <p className="testimonial-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className="testimonial-img" src="http://127.0.0.1:5500/FlexStart/assets/img/testimonials/testimonials-4.jpg" alt="" />
          </div>
          <div className="carousel-item testimonial-item">
            <h2>⭐⭐⭐⭐⭐</h2>
            <p className="testimonial-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className="testimonial-img" src="http://127.0.0.1:5500/FlexStart/assets/img/testimonials/testimonials-2.jpg" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2Interval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2Interval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
export default Testimonials