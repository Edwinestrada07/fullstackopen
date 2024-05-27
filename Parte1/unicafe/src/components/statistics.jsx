import StatisticLine from './statisticLine'

const statistics = ({ good, neutral, bad, allComments, average, positivePercentage }) => {
    if (allComments === 0) {
        return <p>No feedback given</p>        
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />

                    <StatisticLine text="Total Comments" value={allComments} />
                    <StatisticLine text="Average" value={average.toFixed(2)} />
                    <StatisticLine text="Positive Percentage" value={`${positivePercentage.toFixed(2)}%`} />
                </tbody>
            </table>
        </div>
    )
}

export default statistics