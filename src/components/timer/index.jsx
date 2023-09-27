/* eslint-disable react/prop-types */
import { useTimer } from 'react-timer-hook';
import classnames from 'classnames';
import { useEffect } from 'react';
const Timer = ({ onSubmitQuiz }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const { seconds, minutes } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
  });

  useEffect(() => {
    if (seconds === 0 && minutes === 0) onSubmitQuiz();
  }, [seconds, minutes, onSubmitQuiz]);

  return (
    <section
      className={classnames(
        'absolute top-24 text-4xl text-primary font-semibold',
        { 'text-danger': minutes === 0 }
      )}
    >
      <span>{`${minutes}`.length === 1 ? `0${minutes}` : minutes}</span>:
      <span>{`${seconds}`.length === 1 ? `0${seconds}` : seconds}</span>
    </section>
  );
};
export default Timer;
