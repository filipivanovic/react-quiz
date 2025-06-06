import NextButton from './NextButton'

const FinishScreen = ({ maxPoints, points, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100

  let emoji
  if (percentage === 100) emoji = '🥇'
  if (percentage >= 80 && percentage < 100) emoji = '🥈'
  if (percentage >= 50 && percentage < 80) emoji = '🥉'
  if (percentage >= 0 && percentage < 50) emoji = '🤦‍'
  if (percentage === 0) emoji = '📛'
  return (
    <>
      <div>
        <p className="result">
          <span>{emoji}</span>You scored: <strong>{points}</strong> out of {maxPoints} points. (
          {percentage.toFixed(2)}
          %)
        </p>
        <p className="highscore">(Highscore: {highscore} points)</p>
      </div>
      <NextButton dispatch={dispatch} />
    </>
  )
}

export default FinishScreen