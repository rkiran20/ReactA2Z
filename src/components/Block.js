import React from 'react'
import BlockCard from './BlockCard';
import {range} from './utils'

const Block = ({text,setText,word,setWord,letter}) => {
  
    
  return (
    <div className='blockDiv1'>
        {range(5).map((index)=>{
            return(<BlockCard key={index} index={index} value={word} letter={letter} />)
        })}
        <div className='blockDiv1_div'>
            Total chances used<span style={{display:"block", textAlign:"center", border:"2px solid #AFDDE5", padding:"5px", width:"fit-content", marginLeft:"180px" }}> {word.length}</span>
        </div>
    </div>
  )
}

export default Block