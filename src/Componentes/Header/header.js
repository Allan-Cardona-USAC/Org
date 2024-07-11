import "./Header.css"
/*componente en react */
function Header () {
    /*vamos a retornar una estructura html */
    return (
        <header className="header">
            <img src="/img/Header.png" alt="Header" />
        </header>
    );
}
//exportamos el componente siempre se debe exportar
export default Header;