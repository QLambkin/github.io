import React, { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud'
import './SkillsBall.scss'

const Tags = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'MONGOOSE',
  'REACT',
  'C#',
  'PYTHON',
  'SASS',
  'NODE.JS',
  'MONGODB',
  'BOOTSTRAP',
  'C',
  'EXPRESS',
  'MYSQL',
  'JQUERY',
  'JAVA',
  'C++',
]

function SkillsBall() {
  const IsTagCloudLoaded = useRef(false)

  useEffect(() => {
    if (IsTagCloudLoaded.current) return

    TagCloud('.content', Tags, {
      radius: 400,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    })

    IsTagCloudLoaded.current = true
  }, [])

  return <div className="content" />
}

export default SkillsBall
 