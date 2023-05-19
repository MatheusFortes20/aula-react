
import {useState} from "react";
function Soma(){

    const [numero1, setnumero1] = useState<any>();
    const [numero2, setnumero2] = useState<any>();
    const [soma, setSoma] = useState<any>();


  function ClicouNoBotao(){

    setSoma(Number.parseInt(numero1)+ Number.parseInt(numero2))
    console.log(soma);

  }

  function escreverNaCaixa(event: any){

    setnumero1(event.target.value);

  }

  function escreverNaCaixa2(event: any){

    setnumero2(event.target.value);


  }


    return(
        <div>
            <div>
                <h1>Sistena de soma de numeros!</h1>
            </div>
        <div>
            <label>Digite o primeiro numero: 
                <input type="text" onChange={escreverNaCaixa}/>
            </label>
        </div>
        <br></br>
        <div>
            <label>Digite o segundo numero: 
                <input type="text" onChange={escreverNaCaixa2}/>
            </label>
        </div>
        <br></br>
        <div>
            <button onClick={ClicouNoBotao}>Calcular</button>
            <br></br>
        </div>
        <br></br>
        <div>
            <span><strong>Resultado :</strong>{soma}</span>
        </div>
        </div>
    )
}


export default Soma;