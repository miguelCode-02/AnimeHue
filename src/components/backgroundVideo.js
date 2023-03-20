const BackgroundVideo = (style) => {
    const video = require('../assets/video/fondo.mp4')
    return (
        <div>
            <video className='video' loop autoPlay muted src={video} style={style}/>
            <div className='fondo-video'></div>
        </div>
    )
}

export default BackgroundVideo