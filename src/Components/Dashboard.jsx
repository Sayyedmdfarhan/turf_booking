import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from "../Images/turf.jpg";
import img2 from "../Images/turf2.webp";
import img3 from "../Images/turfresize.jpg";
import "../Style/Dashboard.css";
import { useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Carousel showThumbs={false} showArrows={true}>
                <div>
                    <img src={img3} />
                </div>
            </Carousel> */}
      <div className="">
        <div>
          <img className="d-img mb-2" src={img} alt="" />
        </div>
        <button onClick={() => navigate("/slot")} className="img-btn">
          Book Your Slot
        </button>
      </div>
      <div className="status-box">
        <div>
          <input type="date" name="" id="" />
        </div>
        <div>
          <input type="time" name="" id="" />
        </div>
        <div>
          <input type="time" name="" id="" />
        </div>
        <div>
          <button className="">Search</button>
        </div>
        <div>
          <input type="text" name="" id="" />
        </div>
      </div>

      <div className="sell-with-us">
        <h2 className="sell-title">Turf Details</h2>
        <p className="sell-description">
          Join our platform and start selling your products to a wider audience!
        </p>
        <div className="card-container">
          {/* Earn More Card */}
          <div className="card">
            <h3 className="card-title">Earn more</h3>
            <p className="card-description">
              Tap into our existing customer base to increase your sales.
            </p>
          </div>
          {/* Easy Setup Card */}
          <div className="card">
            <h3 className="card-title">Easy Setup</h3>
            <p className="card-description">
              Quick and simple setup process to start listing your products.
            </p>
          </div>
          {/* Marketing Support Card */}
          <div className="card">
            <h3 className="card-title">Marketing Support</h3>
            <p className="card-description">
              Benefit from our marketing efforts to promote your products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
