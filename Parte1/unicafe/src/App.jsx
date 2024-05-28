import { useState } from 'react'
import Statistics from './components/statistics'
import Button from './components/button'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
   
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    const allComments = good + neutral + bad
    const average = allComments ? (good * 1 + neutral * 0 + bad * -1) / allComments : 0
    const positivePercentage = allComments ? (good / allComments) * 100 : 0
        
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text="Good" />
            <Button onClick={handleNeutralClick} text="Neutral" />
            <Button onClick={handleBadClick} text="Bad" />

            <h2>statistics</h2>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                allComments={allComments}
                average={average}
                positivePercentage={positivePercentage}
            />
        </div>
    )
}

export default App
