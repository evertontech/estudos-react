import styles from "./botao.module.css"

export default function Botao() {
  return (
    <>
      <p className = {styles.tituloBotao}>titulo do botao</p>
      <button className={styles.botao}>Componente Botão</button>
    </>
  );
}
