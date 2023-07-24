import { FeedbackOptions, Statistics, Section, Notification } from 'components';

import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedBackOptions = { good, neutral, bad };
  console.log(bad);
  const onHandleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log(``);
    }
  };

  const countTotalFeedback = () => {
    const feedbackValues = Object.values(feedBackOptions);
    const totalFeedBack = feedbackValues.reduce((acc, value) => acc + value, 0);
    return totalFeedBack;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedBackOptions)}
          onLeaveFeedback={onHandleFeedback}
        />
      </Section>
      <Section title="Feedback Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
