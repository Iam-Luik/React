// var root = document.getElementById('root');
// var h1 = document.createElement('h1');
// h1.innerHTML = "Esse é um titulo pelo js";
// root.appendChild(h1);

function Contador({candidato}){
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero+1);
        console.log(numero);
    }

    function subtrair(){
        setNumero(numero-1);
        console.log(numero);
    }

    return(
        <React.Fragment>
            <h1>{candidato}</h1>
            <h1>{numero}</h1>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App(){
    return(
        <React.Fragment>
            <Contador candidato="Eneas"/>
        </React.Fragment>
    );
}

ReactDOM.render(App(), root);

