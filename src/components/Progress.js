const Progress = ({ index, numOfQuestions }) => {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
    </header>
  )
}

export default Progress