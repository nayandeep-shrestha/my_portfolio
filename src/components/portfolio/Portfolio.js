import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard } from "swiper";
import './portfolio.css'
import Project1 from '../../assets/project1.png'
import {BsArrowRightShort} from 'react-icons/bs'
import {TfiAngleRight} from 'react-icons/tfi' 
import {TfiAngleLeft} from 'react-icons/tfi' 

const Portfolio= () => {
  return (
    <section id="portfolio">
      <div className="container">
      <div className='portfolio-head'>
        <h4>My recent work</h4>
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-container">
        <Swiper
          cssMode={true}
          navigation={{
            clickable:true,
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            e1:'.swiper-pagination'
          }}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="portfolio-content grid">
              <img src={Project1} alt='' className='portfolio-img' />
              <div className="portfolio-data">
                  <h3 className="portfolio-title">Wordpress website</h3>
                <p className="portfolio-desc"></p>
                <a href="https://pasadesigns.com/" target='_blank' rel="noreferrer" className="btn btn-flex">
                  Demo
                  <BsArrowRightShort className='btn-icon'/>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio-content grid">
              <img src={Project1} alt='' className='portfolio-img' />
              <div className="portfolio-data">
                <h3 className="portfolio-title">Wordpress website</h3>
                <p className="portfolio-desc"></p>
                <a href="https://pasadesigns.com/" target='_blank' rel="noreferrer" className="btn btn-flex">
                  Demo
                  <BsArrowRightShort className='btn-icon'/>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <div className='swiper-button-next'><TfiAngleRight className='swiper-portfolio-icon'/></div>
          <div className='swiper-button-prev'><TfiAngleLeft className='swiper-portfolio-icon'/></div>
        </Swiper>
        <div className='swiper-pagination'></div>
      </div>
      </div>
    </section>
  )
}

export default Portfolio