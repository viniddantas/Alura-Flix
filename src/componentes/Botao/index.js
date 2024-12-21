import styles from './Botao.module.css'

const Botao = ({ children }) => {
    return (
        <button className={styles.botaoPrincipal}>{children}</button>
    )
}

export default Botao