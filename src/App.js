import { useState } from 'react';
import './App.css';
import MoodDisplay from './MoodDiaplay';

function App() {

  const[mood,setMood]=useState("");
  return (
    <div className={`container ${mood}`}>
      <h1>How are you feeling today?</h1>
      <div className='buttons'>
        <button className='btn happy' onClick={()=>setMood("Happy")}>😄HAPPY</button>
        <button className='btn sad' onClick={()=>setMood("Sad")}>😔SAD</button>
        <button className='btn excited' onClick={()=>setMood("Excited")}>🥳EXCITED</button>
        <button className='btn angry' onClick={()=>setMood("Angry")}>😡ANGRY</button>
      </div>
     <MoodDisplay value={mood}></MoodDisplay>
    </div>
  );
}

export default App;