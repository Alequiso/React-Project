import Item from "./Item"

function List() {
    return(
        <>
            <ul>
                <Item marca="Google" lancamento="154"/>
                <Item marca="Fonfon" lancamento="122"/>
                <Item marca="Microsoft" lancamento="122"/>
                <Item />
            </ul>
        </>
    )
}

export default List