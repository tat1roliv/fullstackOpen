import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const TotalFeedbackColected = (good, neutral, bad) => {
  return good + neutral + bad ;
}

const AverageFeedback = (good, neutral, bad) => {
  return (good - bad) / TotalFeedbackColected(good, neutral, bad);
}

const AveragePositiveFeedback = (good, neutral, bad) => {
  return good / TotalFeedbackColected(good, neutral, bad) * 100;  
}

// lugar adequado para definir um componente
const Statistics = (props) => {
  const allClicks = props.good + props.neutral + props.bad;
  if(allClicks !== 0){
    return (
      <div>
          <p>Good {props.good}</p>
          <p>Neutral {props.neutral}</p>
          <p>Bad {props.bad}</p>

          <p>All {TotalFeedbackColected(props.good, props.neutral, props.bad)}</p>
          <p>Average {AverageFeedback(props.good, props.neutral, props.bad)}</p>
          <p>Average Positive feedback {AveragePositiveFeedback(props.good, props.neutral, props.bad)} %</p>
      </div>
    )
  }
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }
  
  const handleClickBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
     
    </div>
  )
}

export default App
