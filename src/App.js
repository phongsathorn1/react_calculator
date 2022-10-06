import './App.css';

import {useState } from 'react';

function App() {

  const [answer, setAnswer] = useState(0)
  const [pressedNumber, setPressedNumber] = useState(0)
  const [operant, setOperant] = useState("0")

  const [isOperantClick, setIsOperantClick] = useState(false)
  const [isFirstNumber, setIsFirstNumber] = useState(true)


  const onNumberClick = (number) => {
    if (isOperantClick) {
      setPressedNumber("")
    }

    if (pressedNumber === "0"){
      setPressedNumber(number.toString())
    }else{
      setPressedNumber((value) => value + number.toString())
    }
  }


  const onOperantClick = (_operant) => {
    setOperant(_operant)
    calculate(_operant)
    setIsOperantClick(true)
  }


  const calculate = (_operant) => {

    let pressedNumberFloat = parseFloat(pressedNumber)
    let _answer = answer

    if (isFirstNumber) {
      _answer = pressedNumberFloat
      setIsFirstNumber(false)
    }
    else {
      switch (_operant) {
        case "*":
          _answer = _answer * pressedNumberFloat
          break
        case "/":
          _answer = _answer / pressedNumberFloat
          break
        case "+":
          _answer = _answer + pressedNumberFloat
          break
        case "-":
          _answer = _answer - pressedNumberFloat
          break
        default:
          break
      }
    }

    setAnswer(_answer)
    setPressedNumber(_answer.toString())
  }


  const onDotClick = () => {
    setPressedNumber((value) => value + ".")
  }


  const equal = () => {
    calculate(operant)

    setIsOperantClick(false)
    setIsFirstNumber(true)
  }

  const clear = () => {
    setAnswer(0)

    setIsOperantClick(false)
    setIsFirstNumber(true)
    setPressedNumber("0")
  }


  return (
    <div className="App">
      <div className="output">
        {pressedNumber}
      </div>

      <div className="grid-container">

        {/* Row 1 */}
        <div className="grid-button" onClick={() => { clear() }}>
          <span>AC</span>
        </div>

        <div className="grid-button" onClick={() => { setAnswer((value) => value * -1) }}>
          <span>+/-</span>
        </div>

        <div className="grid-button" onClick={() => { onOperantClick("/") }}>
          <span>/</span>
        </div>

        <div className="grid-button" onClick={() => { onOperantClick("*") }}>
          <span>X</span>
        </div>
        {/* End row 1 */}


        {/* Row 2 */}
        <div className="grid-button" onClick={() => { onNumberClick(7) }}>
          <span>7</span>
        </div>

        <div className="grid-button" onClick={() => { onNumberClick(8) }}>
          <span>8</span>
        </div>

        <div className="grid-button" onClick={() => { onNumberClick(9) }}>
          <span>9</span>
        </div>

        <div className="grid-button" onClick={() => { onOperantClick("-") }}>
          <span>-</span>
        </div>
        {/* End row 2 */}


        {/* Row 3 */}
        <div className="grid-button" onClick={() => { onNumberClick(4) }}>
          <span>4</span>
        </div>

        <div className="grid-button" onClick={() => { onNumberClick(5) }}>
          <span>5</span>
        </div>

        <div className="grid-button" onClick={() => { onNumberClick(6) }}>
          <span>6</span>
        </div>

        <div className="grid-button" onClick={() => { onOperantClick("+") }}>
          <span>+</span>
        </div>
        {/* End row 3 */}


        {/* Row 4 */}
        <div className="grid-button" onClick={() => { onNumberClick(1) }}>
          <span>1</span>
        </div>

        <div className="grid-button" onClick={() => { onNumberClick(2) }}>
          <span>2</span>
        </div>

        <div className="grid-button" onClick={() => { onNumberClick(3) }}>
          <span>3</span>
        </div>

        {/* End row 4 */}


        {/* Row 5 */}
        <div className="grid-button zero-button" onClick={() => { onNumberClick(0) }}>
          <span>0</span>
        </div>

        <div className="grid-button" onClick={() => { onDotClick() }}>
          <span>.</span>
        </div>

        <div className="grid-button equal-button" onClick={() => {equal()}}>
          <span>=</span>
        </div>
        {/* End row 5 */}

      </div>
    </div>
  );
}

export default App;
