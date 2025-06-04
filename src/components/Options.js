const Options = ({ question, answer, dispatch }) => {
  const hasAnswer = answer !== null
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswer ? (index === question.correctOption ? 'correct' : 'wrong') : ''}`}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswer}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
export default Options