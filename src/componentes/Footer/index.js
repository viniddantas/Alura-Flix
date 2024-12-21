import styles from './Footer.module.css'
import logo from "assets/logo.png"


const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.footer__logo}
                src={logo}
            />
        </div>
    )
}

export default Footer