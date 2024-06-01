import React from 'react'
import Hint from './Hint';
import HintCard from './HintCard';

const SearchBox = ({text,setText,word,setWord,letter}) => {
    const newArr = [...word];
    const handleOnChange = (data)=>{
        if(word.length<=5)
        setText(data.target.value.toUpperCase())
    }
    const handleClick  = (data)=>{
        data.preventDefault();
        //newArr[0]= text
        newArr.push(text);
        setWord(newArr);
        //console.log(newArr[0][0]);
        setText("")
        if(word.length === 5){
            window.alert("Game Over")
            return;
        }
        if(text===letter){
            window.alert("You Won")
        }
    }
  return (
    <div className='searchDiv' style={{display:"flex"}}>
        <div >
            <HintCard />
        </div>
        <div style={{display:"flex"}}>
        <form  className='searchForm'>
            <label htmlFor='guess-text' className='label'> Enter Guess</label>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <input typeof='text' className='input' required maxLength={5} minLength={5} id='guess-text' value={text} onChange={(event)=>{handleOnChange(event)}} ></input>
                <span className='searchSpan'><button className='searchDivBtn' onClick={(data)=>{handleClick(data)}}>Submit</button></span>
            </div>    
        </form>
        </div>
    </div>
  )
}

export default SearchBox