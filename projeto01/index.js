var divApp = document.getElementById("app");

// var titulo = document.createElement("h1");

// titulo.innerHTML = "Esse titutlo foi criado pelo javascriptkkkkkkkkkkk ༼ つ ◕_◕ ༽つ"
// divApp.appendChild(titulo);

function PrimeiroComponente(props){
    return(
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h1>Esse titutlo foi criado pelo react</h1>
        </React.Fragment>
    );
}

function App(){
    return(
        <React.Fragment>
            <PrimeiroComponente titulo="Primeiro titulo"/>
            <PrimeiroComponente titulo="Segundo titulo"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App), divApp);