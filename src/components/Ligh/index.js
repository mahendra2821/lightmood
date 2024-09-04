
import { useState } from 'react';
import './index.css';

const Ligh = () => {
  const [boolean, setBoolean] = useState(true);

  const onClickMood = () => {
    setBoolean(current => !current);
  };

  const text = boolean ? 'light' : 'dark';
  const background = boolean ? 'light' : 'dark';
  return (
    <div>
      <div className='container'>
        <div className={`${background}`}>
          <h1 className='heading'>Click to change the Mood</h1>
          <button className="button" onClick={onClickMood}>{text}</button>
        </div>
      </div>
    </div>
  );
};

export default Ligh;

