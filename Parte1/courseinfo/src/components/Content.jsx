const Content = ({ parts }) => {
    
    return (
        //--> {parts.map((part, index) => (...)} es una expresión de JavaScript que utiliza el método map para iterar 
        //sobre cada elemento en el array parts.
        //--> La propiedad key es necesaria en los elementos renderizados por iteración en React para ayudar a identi-
        //ficar cada elemento de forma única. Aquí se usa el index del array como key.
        //--> {part.name} inserta el valor de name de cada objeto part dentro del elemento p.
        <div>
            {parts.map((part, index) => (
                <p key={index}>{part.name} {part.exercises}</p>
            ))}
        </div>
    )
}

export default Content



