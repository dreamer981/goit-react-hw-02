import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";

function App() {
  const [feedback, setFeedback] = useState(() => {
    try {
      const savedFeedback = localStorage.getItem("feedback");
      return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return { good: 0, neutral: 0, bad: 0 }; // Eğer hata varsa sıfırla
    }
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback)); 
    }
  }, []);


  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback + feedback.neutral / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
      />
    </div>
  );
}

export default App;
