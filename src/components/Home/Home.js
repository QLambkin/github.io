import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import LogoTitle from '../../assets/images/Q-logo.svg'
import Resume from '../../assets/images/Resume.pdf'
import Logo from './Logo/Logo'
import './Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const hiArray = 'Hi,'.split('')
  const imArray = "I'm".split('')
  const nameArray = 'uentin'.split('')
  const jobArray = 'Web Developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              idx={9}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={imArray}
              idx={12}
            />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
          </h1>
          <p>
            Web Developers | Software Engineer | Java Developer
            <br />
          </p>
          <div className="button-box">
            <a href={Resume} download className="btn btn-flex">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              RESUME
            </a>
            <Link to="/contact" className="btn btn-flex">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              CONTACT ME
            </Link>
          </div>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
