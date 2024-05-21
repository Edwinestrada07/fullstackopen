import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    //const [bad , setBad] = useState(0)
  
    const [totalgood, setTotalGood] = useState(0)
    const [totalneutral, setTotalNeutral] = useState(0)
  
    const handleGoodClick = () => {
        const updatedGood = good + 1

        setGood(updatedGood)
        setTotalGood(updatedGood)
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1

        setNeutral(updatedNeutral)
        setTotalNeutral(updatedNeutral)
    }
  
    return (
        <div>
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
         
            <p>Good {totalgood}</p>
            <p>Neutral {totalneutral}</p>
        </div>
    )
}

export default App
