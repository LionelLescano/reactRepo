const Saludo = ({name, lastname ,fn, children}) => {

    if (fn) {
        fn();
    }
    return( 
    <>
    <h1 > Saludos {name} {lastname}! Que deseas comprar? </h1>
    {children}
    </>
    )
}

export default Saludo