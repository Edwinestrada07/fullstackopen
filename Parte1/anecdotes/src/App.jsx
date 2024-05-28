import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
        'Programming is like sex: one mistake and you have to support it for the rest of your life.',
        'In order to understand recursion, one must first understand recursion.',
        'Programming is 10% writing code and 90% understanding why it doesn’t work.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'The best error message is the one that never shows up.',
    ]

    const [anecdote, setAnecdote] = useState('')
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [currentAnecdoteIndex, setCurrentAnecdoteIndex] = useState(null)
   
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

    const highestVotes = Math.max(...votes)
    const topAnecdoteIndex = votes.indexOf(highestVotes)
        
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <button onClick={handleVoteClick}>Vote</button>
            <button onClick={handleAnecdoteClick}>Next Anecdote</button>
            <p>{anecdote}</p>
            {currentAnecdoteIndex !== null && (
                <p>Votes: {votes[currentAnecdoteIndex]}</p>
            )}

            <h2>Anectote with most votes</h2>
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

