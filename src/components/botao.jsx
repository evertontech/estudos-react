import styles from "./botao.module.css";

const cores = {
  cinza: styles.cinza,
  verde: styles.verde,
  vermelho: styles.vermelho,
};

export default function Botao(props) {
  const textoDoBotao = props.children || "ok";
  const textoDoTitulo = props.titulo || "Título em branco";
  const corDoBotao = cores[props.cor] || cores.cinza;

  return (
    <>
      <p className={styles.tituloBotao}>{textoDoTitulo}</p>
      <button className={`${styles.botao} ${corDoBotao}`}>
        {textoDoBotao}
      </button>
    </>
  );
}

// um componente é um trecho de código que pode ser reutilizado
