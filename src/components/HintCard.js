import React, { useState } from 'react'

const HintCard = () => {
    const [hint,setHint] = useState(false);
    const [hint1,setHint1] = useState(false);
    const [hint2,setHint2] = useState(false);
    const handleHint= ()=>{
        setHint(!hint);
    }
    const handleHint1= ()=>{
        setHint1(!hint1);
    }
    const handleHint2= ()=>{
        setHint2(!hint2);
    }
  return (
    <div>
        <button onClick={handleHint}>Want Hint  </button>
        {hint && <div>
            if u want to unlock this, 20% marks will be deduced for hint 1 and 30% for hint 2
            <div className='hintsDiv'>
                <div className='hint1Div'>
                    <button onClick={handleHint1}>Hint 1</button>
                    {hint1 && <p>this is the word which has a meaning</p>}
                </div>
                <div className='hint2Div'>
                    <button onClick={handleHint2}>Hint 2</button>
                    {hint2 && <p>this is the word which has c in it</p>}
                </div>
            </div>
        </div>}
    </div>
  )
}

export default HintCard