
import React from 'react'

import './SingleSection.css'


const SingleSection = ({ item, setPath, PauseVideoRef, setPlay, PlayVideoRef }) => {
  const { title, subtitle, items } = item
  function VideoHandle(path, e) {
    e.stopPropagation();
    setPath(path);
    PlayVideoRef();
    setPlay(true)

  }

  return (
    <div className='section-container' onMouseEnter={(e) => VideoHandle(item.video, e)} onMouseLeave={() => { PauseVideoRef() }} >

      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequuntur voluptate quae dolorem rem perferendis. Quisquam porro quis, quos accusantium, enim eum odit laudantium tempora temporibus ab, incidunt dignissimos illo?</p>
      <div className='sub-items'>
        {
          items.map((e, i) => <div className='sub-item' key={i}>{e}</div>)
        }
        
      </div>
    </div>
  )
}

export default SingleSection