import CartWidget from "./CartWidget"

const NavBar = () => {
    const navStyle = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const titleStyle = {
        color: '#900C3F',
        fontSize: '24px',
        marginRight: '20px'
    };

    const buttonStyle = {
        backgroundColor: 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 12px',
        margin: '0 5px',
        cursor: 'pointer'
    };

    return (
        <nav style={navStyle}>
            <h2 style={titleStyle}>Tienda One Piece</h2>
            <div>
                <button style={buttonStyle}>Inicio</button>
                <button style={buttonStyle}>Figuras</button>
                <button style={buttonStyle}>Mangas</button>
                <button style={buttonStyle}>Indumentaria</button>
            </div>
            <CartWidget />
        </nav>
    );
}




export default NavBar;