import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
         
    const [totalgood, setTotalGood] = useState(0)
    const [totalneutral, setTotalNeutral] = useState(0)
    const [totalbad, setTotalBad] = useState(0)
    const [allComments, setAllComments] = useState(0)
    //const [average, setAverage] = useState(0)
    
    const handleGoodClick = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
        setTotalGood(updatedGood)

        setAllComments(updatedGood + neutral + totalbad)
        //setAverage(allComments / setAllComments)
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
        setTotalNeutral(updatedNeutral)

        setAllComments(totalgood + updatedNeutral + totalbad)
        //setAverage((allComments) / setAllComments)
    }

    const handleBadClick = () => {
        const updateBad = bad + 1
        setBad(updateBad)
        setTotalBad(updateBad)

        setAllComments(totalgood + totalneutral + updateBad)
        //setAverage((allComments) / setAllComments)
    }
  
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
            <button onClick={handleBadClick}>Bad</button>

            <h2>statistics</h2>
            <p>Good: {totalgood}</p>
            <p>Neutral: {totalneutral}</p>
            <p>Bad: {totalbad}</p>

            <p>Total Comments: {allComments}</p>
            
        </div>
    )
}

export default App
