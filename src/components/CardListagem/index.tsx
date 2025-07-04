import { useEffect } from 'react'
import styles from './styles.module.css'

export function CardListagem() {
  
  const getContatos = async () => {
    try {
      const res = await fetch('api/listarContatos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
      })

      if (!res.ok) throw new Error("Erro ao buscar por contatos")

      const contatosData = await res.json()
      console.log("Contatos:", contatosData)

    } catch (erro) {
      console.error("Erro ao carregar contatos:", erro)
    }
  }

  useEffect(() => {
    getContatos()
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h3>Titulo do card</h3>
        <div>
          <p>Nome aqui</p>
          <p>Tel aqui</p>
        </div>
        <div>
          <p>Categoria aqui</p>
        </div>
      </div>
    </div>
  )
}