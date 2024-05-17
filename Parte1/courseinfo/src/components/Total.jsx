const Total = ({ parts }) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
    
    return (
        <div>
            <p>Number of exercises {totalExercises}</p>
        </div>
    )
}

export   default  Total

//Recibe el array parts como prop.
//Utiliza reduce para calcular el total de ejercicios sumando los valores de exercises de cada parte.
//Muestra el total de ejercicios en un párrafo.





