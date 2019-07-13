import React, { Component } from 'react'
import bgVideo from '../video/clouds_15s.mp4'

import './video.css'

class Video extends Component {
    render() {
        return (
            <video autoPlay loop muted>
                <source src={bgVideo} type='video/mp4'/>
            </video>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        return false
    }
}

export default Video
