import React from 'react'
import { letterCheck, logic } from '../logic'

const BlocksCard = ({value,index,index1,letter}) => {
    //console.log(logic(value[index],"EARTH",index1))
    var className ='blockDiv'
    console.log(letter);
    if(logic(value[index],letter,index1)){
        
       //console.log(logic(value[index],"EARTH",index1))
        if(logic(value[index],letter,index1) === 2){
            className = 'blockDiv correctPlaced';
        }
        else if(logic(value[index],letter,index1)===1 && letterCheck(value[index],index1) ){
            className = 'blockDiv wrongPlaced';
        }
        else if(logic(value[index],letter,index1)===1){
            className ='blockDiv misPlaced';
        }
        else className ='blockDiv wrongPlaced';
    }
  return (
    <div>
        <button className={className} >{value[index] && value[index].split('')[index1] } </button>
    </div>
  )
}

export default BlocksCard