
import React, { useState, useRef } from 'react'
import SingleSection from '../single-section/SingleSection'
import './Section.css';


const Section = ({ list }) => {
    const [path, setPath] = useState("./videos/video-1.mp4");
    const ref = useRef(null);
    const [play, setPlay] = useState(false);

    function PauseVideoRef() {
        ref.current.pause();
    }

    function PlayVideoRef() {
        ref.current.play();
    }

    return (
        <div className='main'>
            <video autoPlay={play} src={require(`${path}`)} ref={ref} muted loop className='videoSection'>
            </video>
            <div className='section'>
                {
                    list.map((item) => {
                        return <SingleSection PlayVideoRef={PlayVideoRef} setPlay={setPlay} PauseVideoRef={PauseVideoRef} setPath={setPath} key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Section

