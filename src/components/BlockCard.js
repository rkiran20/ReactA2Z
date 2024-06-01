import React from 'react'
import { range } from './utils'
import { logic } from '../logic'
import BlocksCard from './BlocksCard';

const BlockCard = ({index,value,letter}) => {
    // if(value[index]){
    //     var dummy= value[index].split('')
    //     console.log(dummy)
    // }
    //console.log(value[index])
   //console.log(logic(value[index],"WATER",1));

  return (
    <div className='blockCardDiv'>
        {range(5).map((index1)=>{
            return(
                <div key={index1} className='blockCardDiv2'><BlocksCard value={value} index={index} index1={index1} letter={letter}/></div>
            )
        })}
    </div>
  )
}

export default BlockCard