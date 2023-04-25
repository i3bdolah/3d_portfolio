import React from 'react'
import ReactDOM from 'react-dom'
import Tilt from 'react-parallax-tilt'
// import { Tilt } from 'react-tilt'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    // trackOnWindow={true}
    // flipHorizontally={true}
    // tiltReverse={true}
    glareEnable={true}
    glareBorderRadius="20px"
    transitionSpeed={600}
    className="xs:w-[250px] w-full rounded-[20px]"
    style={{
      borderRadius: '20px',
    }}
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Highly skilled front-end software engineer experienced in developing and
        designing responsive and user-friendly websites and web applications.
        Proficient in HTML, CSS, JavaScript, and front-end framework React.
        Demonstrated ability to collaborate with teams to deliver high-quality
        projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
