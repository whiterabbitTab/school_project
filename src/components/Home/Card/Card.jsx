import styles from '../Home.module.scss'

export const Card = ({ heading, text }) => {
    return(
        <div className={styles.card}>
            <div></div>
            <div>
                <h5>{heading}</h5>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
