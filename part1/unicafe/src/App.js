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


const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

      <p>All {TotalFeedbackColected(good, neutral, bad)}</p>
      <p>Average {AverageFeedback(good, neutral, bad)}</p>
      <p>Average Positive feedback {AveragePositiveFeedback(good, neutral, bad)} %</p>
    </div>
  )
}

export default App
