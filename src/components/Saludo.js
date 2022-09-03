const Saludo = ({name, lastname ,fn, children}) => {

    if (fn) {
        fn();
    }
    return( 
    <>
    <h1 className="text-3xl" > Saludos {name} {lastname}! Que deseas comprar? </h1>
    {children}
    </>
    )
}

export default Saludo