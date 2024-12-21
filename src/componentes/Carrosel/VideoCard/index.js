import styles from './VideoCard.module.css'
import videoCard from 'assets/videoCard.png'

const VideoCard = () => {
    return (
        <img
            src={videoCard}
            className={styles.videoCard}
        />
    )
}

export default VideoCard