import Botao from "componentes/Botao"
import styles from "./Header.module.css"
import logo from "assets/logo.png"

const Header = () => {
    return (
        <div className={styles.container}> 
            <a href="/">
                <img
                    className={styles.logo}
                    src={logo}
                    alt="Logo da Alura Flix"
                />
            </a>

            <Botao>Novo vídeo</Botao>
        </div>
    )
}

export default Header