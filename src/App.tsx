
import Soma from "./components/Soma";
import Operacao from "./components/Operacao";


function App() {

  
  return (
    <div className="App">
      <h1>Componente da soma</h1>
      <p>Estudante de programação e jogador de Counter strike nas horas vagas!!</p>
      
      <Soma/>
      <Operacao tipo="subtração"/>

    
    </div>
  );
}

export default App;
