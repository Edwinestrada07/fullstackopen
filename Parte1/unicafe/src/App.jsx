import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
         
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    const allComments = good + neutral + bad;
    const average = allComments ? (good * 1 + neutral * 0 + bad * -1) / allComments : 0
    const positivePercentage = allComments ? (good / allComments) * 100 : 0
        
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
            <button onClick={handleBadClick}>Bad</button>

            <h2>statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>

            <p>Total Comments: {allComments}</p>
            <p>Average: {average.toFixed(6)}</p>
            <p>Positive Percentage: {positivePercentage.toFixed(6)}%</p>
        </div>
    )
}

export default App
