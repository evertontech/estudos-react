import styles from "./botao.module.css";

export default function Botao(props) {
  const cores = {
    cinza: styles.cinza,
    verde: styles.verde,
    vermelho: styles.vermelho,
  };

  const textoDoBotao = props.texto || "ok";
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
