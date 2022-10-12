import './AnimatedLetters.scss'

//idx used to display each character individually in AnimatedLetters.scss
const AnimatedLetters = ({ letterClass, strArray, idx }) => {

  function toggleRubberBand(e) {
    if(e.target === undefined) {
      console.log(e.target);
      return
    }
    e.target.classList.add('bouncing')
    e.target.addEventListener('animationend', () => {
      e.target.classList.remove('bouncing')
    })
  }

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          onMouseEnter={toggleRubberBand}
          key={char + i}
          className={`${letterClass} _${i + idx}`}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
