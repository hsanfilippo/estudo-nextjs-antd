import { useEffect, useState } from 'react'
import styles from './styles.module.css'

type Contato = {
  Nome: string,
  Telefone: string,
  Categoria: string
}

export function CardListagem() {
  const [contatos, setContatos] = useState<Contato[]>([])
  
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
      setContatos(contatosData)
      console.log("Contatos:", contatosData)

    } catch (erro) {
      console.error("Erro ao carregar contatos:", erro)
    }
  }

  useEffect(() => {
    getContatos()
  }, [])

  return (
    <>
      <div className={styles.cardContainer}>
          <div className={styles.card}>
          {contatos.map((contato) => {
            return (
            <div className={styles.contatoContainer}  key={contato.Telefone}>
              <div className={styles.contatoInfo}>
                <p className={styles.infoText}>{contato.Nome}</p>
                <p className={styles.infoText}>{contato.Telefone}</p>
              </div>
              <div>
                <p className={styles.categoria}>{contato.Categoria}</p>
              </div>
            </div>
            )  
        })}
      </div>
      </div>
    </>
  )
}