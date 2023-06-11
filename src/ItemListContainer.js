const ItemListContainer =({greeting}) => {
    const styleSaludo ={
        textAlign: 'center'
    }
    
    return(
        <div>
            <h1 style={styleSaludo}>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer