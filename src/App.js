import "./App.css";
import Botao from "./components/botao";

export default function App() {
  return (
    <>
      <h1>Aprendendo React</h1>
      <p>Você ganhou um presente!!!</p>
      <button>clique aqui</button>
      <Botao texto="botão 1"></Botao>
      <Botao titulo="Título do botão 2" cor=""/> 
      <Botao titulo="Título do botão 3"  texto="botão 3" cor="vermelho"/>
      <Botao texto="botão 4" titulo="Título do botão 4" cor="verde"/>
      <hr />
    </>
  );
}
