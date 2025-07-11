import React from "react";
import "./portfolio.css";
import Pasa1 from "../../assets/project1.1.webp";
import Pasa2 from "../../assets/project1.2.webp";
import Ecom1 from "../../assets/project2.1.webp";
import Ecom2 from "../../assets/project2.2.webp";
import Ecom3 from "../../assets/project2.3.webp";
import Weath from "../../assets/project3.1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import { BsWordpress } from "react-icons/bs";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-head">
          <h4>My recent work</h4>
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-area">
          <div className="portfolio-item">
            <div className="img-block">
              <Swiper
                cssMode={true}
                loop={true}
                pagination={{
                  clickable: true,
                  e1: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                keyboard={true}
                modules={[Pagination, Keyboard, Autoplay]}
                className="portfolio-swiper"
              >
                <SwiperSlide>
                  <img src={Pasa1} alt="" className="project-img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Pasa2} alt="" className="project-img" />
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
            <div className="portfolio-content">
              <h4>Real Project</h4>
              <h2>
                Pasa Design Studio
                <a
                  href="https://pasadesigns.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <BiLinkExternal color="#03604e" />
                </a>
              </h2>
              <h3>An Architecture Company</h3>
              <div className="portfolio-content-para">
                <p>
                  PΛSΛ is a contemporary website designed for an architecture
                  company. Its primary purpose is to elegantly present and
                  inform visitors about the firm's projects, work culture, and
                  other relevant information about the company.
                </p>
                <p>
                  It was built using <b>Wordpress</b>{" "}
                  <BsWordpress size={20} color="blue" />
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item reverse">
            <div className="img-block">
              <Swiper
                cssMode={true}
                loop={true}
                pagination={{
                  clickable: true,
                  e1: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 2000,
                  pauseOnMouseEnter: false,
                }}
                keyboard={true}
                modules={[Pagination, Keyboard, Autoplay]}
                className="portfolio-swiper"
              >
                <SwiperSlide>
                  <img src={Ecom1} alt="" className="project-img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Ecom2} alt="" className="project-img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Ecom3} alt="" className="project-img" />
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
            <div className="portfolio-content">
              <h4>Personal Project</h4>
              <h2>
                TechShop
                <a
                  href="https://tech-shopp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <BiLinkExternal color="#03604e" />
                </a>
                <a
                  href="https://github.com/nayandeep-shrestha/ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "0.5rem" }}
                >
                  <BiLogoGithub color="black" />
                </a>
              </h2>
              <h3>An Ecommerce Site</h3>
              <div className="portfolio-content-para">
                <p>
                  TechShop is a FullStack ecommerce website that I developed
                  during my journey of mastering the MERN stack.
                </p>
                <div className="portfolio-tools">
                  <ul>
                    <b>Stacks Used:</b>
                    <li>- React</li>
                    <li>- NodeJS</li>
                    <li>- ExpressJs</li>
                    <li>- MongoDb</li>
                  </ul>
                  <ul>
                    <b>Features:</b>
                    <li>- Realtime OTP verification</li>
                    <li>- JWT for authentication</li>
                    <li>- Stripe as payment gateway</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="img-block">
              <Swiper
                cssMode={true}
                loop={true}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                  clickable: true,
                  e1: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                keyboard={true}
                modules={[Pagination, Keyboard, Autoplay]}
                className="portfolio-swiper"
              >
                <SwiperSlide>
                  <img src={Weath} alt="" className="project-img" />
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
            <div className="portfolio-content">
              <h4>Personal Project</h4>
              <h2>
                Weatherify
                <a
                  href="https://weatherify-forecast.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <BiLinkExternal color="#03604e" />
                </a>
                <a
                  href="https://github.com/nayandeep-shrestha/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "0.5rem" }}
                >
                  <BiLogoGithub color="black" />
                </a>
              </h2>
              <h3>A Weather Forecast WebApp</h3>
              <div className="portfolio-content-para">
                <p>
                  &#x2022; Developed using React.js and Tailwind CSS for a
                  modern and responsive user interface.
                </p>
                <p>
                  &#x2022; Integrates the Open-Meteo API to provide real-time
                  weather information, ensuring accurate and up-to-date
                  forecasts for users.
                </p>
                <p>
                  &#x2022; Utilizes the Geoapify API to fetch latitude and
                  longitude coordinates based on user input, enabling precise
                  location-based weather updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
