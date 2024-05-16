import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
    const course = 'Half Stack application development' 
    const parts = [
        { name: 'Fundamentals of React'},
        { name: 'Using props to pass data'},
        { name: 'State of a component'}
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts}/>
            <Total />
        </div>
    )
}
  
export default App