import styles from './Texto.module.css'
//Utilizando o módulo css por criar o arguivo nesse formato NomeDoComponente.modulo.css

function Texto(){
  return(
    <div className={styles.textoContainer}>
      <h1 className={styles.textoContant}>Esse é o nosso Componente exportado da pasta Texto</h1>
    </div>
  )
}

export default Texto;