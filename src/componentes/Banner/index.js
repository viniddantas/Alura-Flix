import styles from "./Banner.module.css"
import player from "assets/player.png"


const Banner = () => {
    return (

        <>
            
            <div className={styles.banner}>
                <img 
                    className={styles.banner__background}
                    src={player}
                />
                <div className={styles.banner__principal}>
                    <div className={styles.principal__info}>
                        <h1>Front End</h1>
                        <h2>SEO com React</h2>
                        <p>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.</p>
                    </div>
                    <img 
                        className={styles.principal__player}
                        src={player}
                    />
                </div>
            </div>

        </>
    )
}

export default Banner