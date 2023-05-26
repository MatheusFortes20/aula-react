
import {useState} from "react";

interface Props {

    tipo: string
}
function Operacao(props: Props){

    const [numero1, setnumero1] = useState<any>();
    const [numero2, setnumero2] = useState<any>();
    const [subtracao, setSoma] = useState<any>();


  function ClicouNoBotao(){

    setSoma(Number.parseInt(numero1)- Number.parseInt(numero2))
    //console.log(subtracao);

  }
    return(
        <div>
            <div>
                <h1>Sistema de Subtraçao de numeros!</h1>
            </div>
        <div>
            <label>Digite o primeiro numero: 
                <input type="text" onChange={(event:any) => setnumero1(event.target.value)}/>
            </label>
        </div>
        <br></br>
        <div>
            <label>Digite o segundo numero: 
                <input type="text" onChange={(event:any) => setnumero2(event.target.value)}/>
            </label>
        </div>
        <br></br>
        <div>
            <button onClick={ClicouNoBotao}>SUBTRAIR</button>
            <br></br>
        </div>
        <br></br>
        <div>
            <span><strong>Resultado :</strong>{subtracao}</span>
        </div>
        </div>
    )
}


export default Operacao;    