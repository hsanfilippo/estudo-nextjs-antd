import { CardListagem } from "@/components/CardListagem";
import { Header } from "@/components/Header";

export default function ListarContatos() {
  return (
    <>
      <Header headerContent="Sua lista de contatos" />
      <div className="container">
        <CardListagem />
      </div>
    </>
  )
}