import Soma from "./components/Soma";
import EntradaDeDados from "./components/Labels";
import EntradaDeDados2 from "./components/Label2";
import Botao from "./components/Botao";

function App() {

  
  return (
    <div className="App">
      <h1>Componente da soma</h1>
      <p>Estudante de programação e jogador de Counter strike nas horas vagas!!</p>
      <Soma></Soma>
      <EntradaDeDados></EntradaDeDados>
      
     <>
     <br></br>
     <EntradaDeDados2></EntradaDeDados2>
     </> 

     <>
     <br></br>
     <Botao></Botao>
     <br></br>
     <span>Resposta: </span>

     </>

    
    </div>
  );
}

export default App;
