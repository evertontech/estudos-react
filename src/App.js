import "./App.css";
import Botao from "./components/botao";

export default function App() {
  return (
    <>
      <h1>Aprendendo React</h1>
      <p>Você ganhou um presente!!!</p>
      <button>clique aqui</button>
      <Botao texto="emergência"></Botao>
      <Botao texto="enter" />
      <Botao />
      <hr />
    </>
  );
}
