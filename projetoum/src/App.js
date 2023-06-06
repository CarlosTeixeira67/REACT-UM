import "./App.css";
import Carloscarloso from "./Components/Carloscarloso";
import Componente1 from "./Components/componente1";


function App() {

let aluno = "Carlos Augusto Teixeira"; 

  return (
    <div className="App">
      <h1>Olá, {aluno} !</h1>
      <h2>Sua Nota é 10</h2>
      


<Componente1/>
<Carloscarloso/>
    
    </div>
  );
}

export default App;
