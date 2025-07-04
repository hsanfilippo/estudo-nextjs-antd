import Head from "next/head";
import styles from "@/styles/Home.module.css"
import { Formulario } from "@/components/Formulario";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className="container">Form com Ant Design</h1>
      </header>
      <Formulario />
    </>
  );
}
