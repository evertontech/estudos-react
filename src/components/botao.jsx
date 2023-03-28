import styles from "./botao.module.css";

export default function Botao(dados) {
  const textoDoBotao = dados.texto || "ok";
  const textoDoTitulo = dados.titulo || "titulo em branco";

  return (
    <>
      <p className={styles.tituloBotao}>{textoDoTitulo}</p>
      <button className={styles.botao}>{textoDoBotao}</button>
    </>
  );
}

// um componente é um trecho de código que pode ser reutilizado
