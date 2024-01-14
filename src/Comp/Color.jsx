import { useState } from "react";
import styles from "./Color.module.css";

function Color() {
  const [car, setCar] = useState("");
  const [car1, setCar1] = useState("");
  const [score, setScore] = useState(0);
  const [fscore, setFscore] = useState(0);
  const [answerSelected1, setAnswerSelected1] = useState(false);
  const [answerSelected2, setAnswerSelected2] = useState(false);
  const correctAnswer = "User interface";
  const correctAnswer1 =
    "To provide a lightweight representation of the DOM in memory for efficient updates.";

  const updateScore = (selectedValue, correctAnswer, setAnswerSelected) => {
    if (selectedValue === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFscore((fscore) => fscore + 1);
    }
    setAnswerSelected(true);
  };

  return (
    <div className={styles.box}>
      <div className={styles.selection}>
      <ol type="a">
        <li>
          <p>React is mainly used for building ___.</p>
          <select
            className={`form-select`}
            aria-label="Select correct answer"
            value={car}
            onChange={(event) => {
              const selectedValue = event.target.value;
              setCar(selectedValue);
              updateScore(selectedValue, correctAnswer, setAnswerSelected1);
            }}
            disabled={answerSelected1}
          >
            <option value="" disabled>
              Select correct answer
            </option>
            <option value="Database">Database</option>
            <option value="Connectivity">Connectivity</option>
            <option value="User interface">User interface</option>
            <option value="Design Platform">Design Platform</option>
          </select>
        </li>
        <li>
          <p>What is the purpose of React's virtual DOM?</p>
          <select
            className={`form-select`}
            aria-label="Select correct answer"
            value={car1}
            onChange={(event) => {
              const selectedValue = event.target.value;
              setCar1(selectedValue);
              updateScore(selectedValue, correctAnswer1, setAnswerSelected2);
            }}
            disabled={answerSelected2}
          >
            <option value="" disabled>
              Select correct answer
            </option>
            <option value="To directly manipulate the browser's DOM for optimal performance">
              To directly manipulate the browser's DOM for optimal performance
            </option>
            <option value="To create a backup of the DOM in case of data loss.">
              To create a backup of the DOM in case of data loss.
            </option>
            <option value="To provide a lightweight representation of the DOM in memory for efficient updates.">
              To provide a lightweight representation of the DOM in memory for
              efficient updates.
            </option>
            <option value="To replace HTML and CSS with a more efficient rendering engine.">
              To replace HTML and CSS with a more efficient rendering engine.
            </option>
          </select>
        </li>
      </ol>
      <h1>Total score is {fscore}</h1>
    </div>
    </div>
  );
}

export default Color;
