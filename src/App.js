import { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Loader from './components/Loader'
import Error from './components/Error'
import StartScreen from './components/StartScreen'
import Question from './components/Question'

const initialState = {
  questions: [],

  status: 'loading', // loading, error, ready, active, finished
  index: 0,
  answer: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active'
      }
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

const App = () => {
  const [{ questions, status, index, answer }, dispatch] = useReducer(reducer, initialState)
  console.log(questions)

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const res = await fetch('http://localhost:8000/questions')
        const data = await res.json()
        dispatch({ type: 'dataReceived', payload: data })
      } catch (error) {
        console.error(`Error in getQuestion method: ${error.message || error}`)
        dispatch({ type: 'dataFailed' })
      }
    }
    getQuestion()
  }, [])

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numOfQuestions={questions.length} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <Question question={questions[index]} dispatch={dispatch} answer={answer} />
        )}
      </Main>
    </div>
  )
}

export default App