import { motion } from 'framer-motion'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { github, view } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_live_server,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="img"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex gap-1 justify-end m-3 card-img_hover">
            <div // View
              onClick={() => window.open(source_live_server)}
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-200"
            >
              <img src={view} alt="github" className="w-1/2 h-1/2" />
            </div>
            <div // Github
              onClick={() => window.open(source_code_link)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-[24px] text-white ">{name}</h3>
          <p className="text-secondary mt-2 text-[14px] min-h-[84px]">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Please take a moment to explore the projects below, which showcase my
          skills and highlight my passion for creating exceptional user
          experiences. Feel free to click on the project titles or screenshots
          to view live demos or access the project repositories on GitHub for
          further details.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-9 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')
