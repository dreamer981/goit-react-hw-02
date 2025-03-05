import React from "react";
import styles from "./Feedback.module.css";


const Feedback = ({feedback, totalFeedback, positiveFeedbackPercentage}) => {
  return (
    <div className={styles.feedbackContainer}>
      {totalFeedback === 0 ? (
        <p>No feedback yet</p> 
      ) : (
        <>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total feedback: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p> 
        </>
      )}
    </div>
  );
};

export default Feedback; 
