import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val, index) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src="../images/man.jpeg" alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p style={{ Color: 'yellow' }}>{val.desc}</p>
                <p style={{ Color: 'black' }}>{val.desc1}</p>
    
                <a href="https://drive.google.com/file/d/188Gey_R8wSs1CjS1HqjddASuwDntdTXr/view?usp=sharing" download>
                <button className='primaryBtn'>Download CV</button>
    </a>
               
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
