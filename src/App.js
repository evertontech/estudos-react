import "./App.css";
import Botao from "./components/botao";

export default function App() {
  return (
    <>
      <h1>Aprendendo React</h1>
      <p>Você ganhou um presente!!!</p>
      <button>clique aqui</button>
      <Botao>Start</Botao>
      <Botao titulo="Título do botão 2" cor="cinzas">
        Stop
      </Botao>
      <Botao titulo="Título do botão 3" cor="vermelho">
        Cancelar
      </Botao>
      <Botao titulo="Título do botão 4" cor="verde">
        Reiniciar
      </Botao>
      <hr />
    </>
  );
}

// cada função só retorna uma tag <>, </>
