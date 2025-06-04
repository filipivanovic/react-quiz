const Progress = ({ index, numOfQuestions, points, maxPoints, answer }) => {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numOfQuestions} />
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