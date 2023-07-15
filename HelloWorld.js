import Texto from './TextoJs/Texto'
//Nosso componente usando Texto importado da pasta TextoJs usando na HelloWorld Nosso outro componente
function HelloWorld(){
  return(
    <div>
      <header>
        <nav>
          <ul>
            <li>HOME</li>
            <li>CONTATOS</li>
            <li>DIVERSOS</li>
            <li>AJUDA</li>
          </ul>
        </nav>
      </header>
      <h1><Texto/></h1>
    </div>
  )
}
export default HelloWorld;