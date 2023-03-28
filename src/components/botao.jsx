import styles from "./botao.module.css";

export default function Botao(dados) {
  let textoDoBotao = dados.texto;

  if (textoDoBotao == null) {
    textoDoBotao = "ok";
  }

  return (
    <>
      <p className={styles.tituloBotao}>titulo do botao</p>
      <button className={styles.botao}>{textoDoBotao}</button>
    </>
  );
}

// um componente é um trecho de código que pode ser reutilizado
