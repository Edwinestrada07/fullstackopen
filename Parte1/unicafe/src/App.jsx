import { useState } from 'react'
import Statistics from './components/statistics'
import Button from './components/button'

const App = () => {
    const anecdotes = [
        'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
        'Programming is like sex: one mistake and you have to support it for the rest of your life.',
        'In order to understand recursion, one must first understand recursion.',
        'Programming is 10% writing code and 90% understanding why it doesn’t work.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'The best error message is the one that never shows up.',
    ]

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [anecdote, setAnecdote] = useState('')
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [currentAnecdoteIndex, setCurrentAnecdoteIndex] = useState(null)
   
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)
    const handleAnecdoteClick = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length)
        setCurrentAnecdoteIndex(randomIndex)
        setAnecdote(anecdotes[randomIndex])
    }
    const handleVoteClick = () => {
        if(currentAnecdoteIndex !== null) {
            const newVotes = [...votes]
            newVotes[currentAnecdoteIndex] += 1
            setVotes(newVotes)
        }
    } 

    const allComments = good + neutral + bad
    const average = allComments ? (good * 1 + neutral * 0 + bad * -1) / allComments : 0
    const positivePercentage = allComments ? (good / allComments) * 100 : 0

    const highestVotes = Math.max(...votes)
    const topAnecdoteIndex = votes.indexOf(highestVotes)
        
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

            <h2>anecdote</h2>
            <Button onClick={handleAnecdoteClick} text="Next Anecdote" />
            <Button onClick={handleVoteClick} text="Vote" />
            <p>{anecdote}</p>
            {currentAnecdoteIndex !== null && (
                <p>Votes: {votes[currentAnecdoteIndex]}</p>
            )}

            <h2>Top Anecdote</h2>
            {highestVotes > 0 && (
                <div>
                    <p>{anecdotes[topAnecdoteIndex]}</p>
                    <p>Votes: {highestVotes}</p>
                </div>
            )}
        </div>
    )
}

export default App
