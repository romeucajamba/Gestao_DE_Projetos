//Fragments <></> sem a Nossa div pai onde será escerevido do código
import Item from "../Item";
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
           <ul>
                <Item marca="Louis Vuitton"/>
                <Item marca="Adidas"/>
                <Item marca="Nike"/>
           </ul>
        </>
    )
}

export default List;