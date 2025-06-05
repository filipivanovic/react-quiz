const NextButton = ({ dispatch, answer, index, numOfQuestions }) => {
  if (answer === null) return null

  if (index < numOfQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion' })}>
        Next
      </button>
    )

  if (index === numOfQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'finish' })}>
        Finish
      </button>
    )
  if (!numOfQuestions)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'restart' })}>
        Start Again
      </button>
    )
}
export default NextButton