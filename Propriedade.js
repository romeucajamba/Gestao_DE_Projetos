//Aqui estamos atribuir as nossas propriedades ao nosso componente como parámetrodentro de chaves e será interpretado como class

function MinhaPropriedade({foto, nome, idade, profissao}){
  return(
    <div>
      <img src={foto} alt={nome}></img>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}
export default MinhaPropriedade;