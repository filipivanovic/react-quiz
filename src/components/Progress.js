const Progress = ({ index, numOfQuestions, points, maxPoints }) => {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  )
}

export default Progress