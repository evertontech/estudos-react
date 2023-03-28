import styles from "./botao.module.css";

export default function Botao(props) {
  const textoDoBotao = props.texto || "ok";
  const textoDoTitulo = props.titulo || "Título em branco";

  return (
    <>
      <p className={styles.tituloBotao}>{textoDoTitulo}</p>
      <button className={styles.botao}>{textoDoBotao}</button>
    </>
  );
}

// um componente é um trecho de código que pode ser reutilizado
