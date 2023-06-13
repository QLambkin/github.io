import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
 
    emailjs
      .sendForm(
        'service_xqbkgeg', 
        'template_0dnnsfv',
        form.current,
        'mPzdkDmcx8ELeCezs'
      )
      .then(
        () => {
          alert('Message has been sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={10}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <label className="btn btn-flex">
                    <input
                      type="submit"
                      className="invisible-button"
                      value="SEND"
                    />
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                    SEND
                  </label>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Quentin Lambkin
          <br />
          Windsor, Ontario
          <br />
          Canada
          <br />
          <br />
          <span>Q.lambkin@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.313318, -83.06688]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.3107, -83.0598]}>
              <Popup>My Humble Abode</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
 