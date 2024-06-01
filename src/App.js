import { useState } from 'react';
import './App.css';
import Block from './components/Block';
import SearchBox from './components/SearchBox';
import Hint from './components/Hint';
import { randomGenerator, randomWords } from './data';

function App({letter}) {
    const [text, setText] = useState("");
    const [word, setWord] = useState([]);
    // const randomNumber = Math.random()*200;
    // // console.log(randomWords[Math.floor(randomNumber)])
    // // console.log(randomNumber)
    // const letter =randomWords[Math.floor(randomNumber)].toUpperCase();
    //const letter = randomGenerator(randomWords)
    
  return (
    <div className="App">
      <h1 className="gameHeader" >WORD GAME</h1>
      <div>
        <Block text={text} setText={setText} word={word} setWord={setWord} letter={letter} />
      </div>
      <SearchBox text={text} setText={setText} word={word} setWord={setWord} letter={letter} />
    </div>
  );
}

export default App;
