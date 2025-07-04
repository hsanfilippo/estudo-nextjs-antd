import styles from './styles.module.css'

type Props = {
  headerContent: string
}

export function Header({ headerContent }: Props) {
  return (
    <header className={styles.header}>
      <h1 className="container">{headerContent}</h1>
    </header>
  )
}