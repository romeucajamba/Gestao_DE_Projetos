//Nosso arquivo principal nosso JSX HTML + JS
import './App.css';
import HelloWorld from './Components/HelloWorldJs/HelloWorld';
import MinhaPropriedade from './Components/HelloWorldJs/PropriedadesJs/Propriedade';
import Texto from './Components/HelloWorldJs/TextoJs/Texto';
import List from './Components/HelloWorldJs/List';
  
function App() {
  
  return (
    <>
      <p>Alterando o JSX</p>
      <HelloWorld/>
      <MinhaPropriedade  foto="./Components/img/Romeu.jpg"
         nome="Romeu_Cajamba" 
         idade="24"
         profissao="Desenvolvedor Front-End"
       />
       <Texto/>
       <List />
    </>
  );
}

export default App;
