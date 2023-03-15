import './App.css';
import { useState } from 'react'
import { Data } from './Components/Data.js'

function App() {
  const [questionnum, setQuestionnum] = useState(0);
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const handelState = (type) => {

    if (type) {
      setScore(score + 1)
    }
    const nextvalue = questionnum + 1
    if (nextvalue < Data.length) {

      setQuestionnum(nextvalue)
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <div className="App">
      {showScore ? (
        <div className="OuterScore">
          <h1> Score is {score} out of 5</h1>
          <p>Answer</p>
          <div className="showScoreHeader">
            {
              Data.map((ele) => {
                return <div>
                  <h3 style={{ color: "#7a007a" }}>{ele.question}</h3>
                  {ele.answer.map((ele) => {
                    if (ele.type === true) {
                      return <p style={{ paddingLeft: "20px" }}> - {ele.option}</p>
                    }
                    return null;
                  })}
                </div>
              })
            }
          </div>
        </div>

      ) : (

        <div className='Outer'>
          <div className='headerDiv'>
            <h2 style={{ color: "green", fontSize: "2rem" }}>Geekstar Quiz</h2>
            <p>Curront Score: {score} </p>
          </div>
          <div className='questionDiv'>
            <h3 style={{ color: "white" }}>Question {questionnum + 1} out of 5</h3>
            <h2 style={{ color: "#e9b74e" }} >{Data[questionnum].question}</h2>
            {Data[questionnum].answer.map((ele) => {
              return <button onClick={() => {
                handelState(ele.type)
              }}>
                {ele.option}</button>
            })}
          </div>
        </div>)}

    </div>
  );
}

export default App;
