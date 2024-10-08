import React from "react"
import Slider from "react-slick"
import { education } from "../data/dummydata"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Education = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='testimonials hero'>
        <div className='container'>
          <Slider {...settings}>
            {education.map((val,index) => (
              <div className='box'>
                <i data-aos='zoom-out-up'>
                  <FormatQuoteIcon />
                  <img src={val.img} style={{width:"100%"}}/>
                </i>
                <p data-aos='zoom-out-down'>{val.title}</p>
                <h3 data-aos='zoom-out-left'>{val.desc}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
