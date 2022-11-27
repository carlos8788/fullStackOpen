import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Title = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}
const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => (
    <p>{props.text} {props.value} {props.text2}</p>
)

const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    const average = (props.good * 1 + props.bad * -1) / total
    const positive = props.good * (100 / total)

    if (total === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                <Statistic text="good" value={props.good} />
                <Statistic text="neutral" value={props.neutral} />
                <Statistic text="bad" value={props.bad} />
                <Statistic text="all" value={total} />
                <Statistic text="average" value={average} />
                <Statistic text="positive" value={positive} />
                </tbody>
          </table>
        </div>
    )
}


const App = () => {
    // save props of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleButtonClick = (valor, functionSet) => {
        valor = valor + 1;
        return functionSet(valor);
    }
    
    return (

        <>
            <Title text="give feedback" />
            <Button handleClick={() => handleButtonClick(good, setGood)} text="good" />
            <Button handleClick={() => handleButtonClick(neutral, setNeutral)} text="neutral" />
            <Button handleClick={() => handleButtonClick(bad, setBad)} text="bad" />

            <Title text="statics" />
            
            <Statistics good={good} neutral={neutral} bad={bad}/>

        </>

    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)