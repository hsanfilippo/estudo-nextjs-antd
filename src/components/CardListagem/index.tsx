import styles from './styles.module.css'

type Props = {
  title: string
  content: {}
}

export function CardListagem() {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h3>Titulo do card</h3>
      </div>
    </div>
  )
}