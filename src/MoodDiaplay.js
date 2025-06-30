import React from 'react'

function MoodDisplay({value}) {
    const moods={
        Happy:"Keep Smiling ! 😊",
        Sad:"It's okay to be sad sometimes 🥲",
        Excited:"Super!Let's celebrate 🤗",
        Angry:"I am very angry 😡",
    };
    return (
        <div className='box'>
            {value? <p>{moods[value]}</p> :<p> Select your mood</p>}
        </div>
    )
}

export default MoodDisplay