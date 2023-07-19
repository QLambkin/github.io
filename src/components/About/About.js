import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import SkillsBall from '../SkillsBall/SkillsBall'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={10} //1.5 second delay
            />
          </h1>
          <p>
            I am an eager Software Engineer with a fundamental understanding of
            software design and the Agile development cycle. Capable of
            implementing Java, MERN and Python solutions while utilizing strong
            interpersonal, analytical, and programming skills to succeed as a
            software engineer.
            <br />
          </p>
          <br />
          <p>
            Graduated from the University of Windsor with a Bachelor of Computer
            Science. I completed courses in JavaScript, HTML5, CSS, Bootstrap,
            Java, Python, C, C#, Data Structures, Algorithms, Computer
            Architecture, Agile Development, Operating Systems, Databases, Web
            Development, Game Development, and many others covering key topics
            in AI, abstraction, and design.
            <br />
          </p>
        </div>
        <div className="skillsball">
          <SkillsBall />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
     