import Head from "next/head";
import { Formulario } from "@/components/Formulario";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerContent="Adicionar um contato" />
      <Formulario />
    </>
  );
}
