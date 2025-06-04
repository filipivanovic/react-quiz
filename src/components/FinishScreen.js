const FinishScreen = ({ maxPoints, points }) => {
  const percentage = (points / maxPoints) * 100
  return (
    <div>
      <p className="result">
        You scored: <strong>{points}</strong> out of {maxPoints} points. ({percentage.toFixed(2)}%)
      </p>
    </div>
  )
}

export default FinishScreen