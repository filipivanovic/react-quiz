import Header from './Header'
import Main from './Main'
import { useEffect, useReducer } from 'react'

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  currentQuestion: 0,
  score: 0,
  error: null
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
        error: action.payload,
        status: 'error'
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
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
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  )
}

export default App