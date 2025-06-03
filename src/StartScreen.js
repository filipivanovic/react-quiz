const StartScreen = ({ numOfQuestions }) => {
  return (
    <div className={`start`}>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test React mastery</h3>
      <button className={`btn btn-ui`}>Let's Start</button>
    </div>
  )
}

export default StartScreen