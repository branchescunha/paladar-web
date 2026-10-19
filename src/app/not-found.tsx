import Link from "next/link";
import { homeStartHref } from "@/data/site";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Erro 404</p>
        <h1>Página não encontrada.</h1>
        <p>O endereço acessado não existe ou não está mais disponível.</p>
        <Link className={styles.button} href={homeStartHref}>
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
