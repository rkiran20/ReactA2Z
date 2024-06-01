export const logic = (string1,string2,index2) =>{
    if(string1){
        const text1=string1.split('');
        const text2=string2.split('');
        if(text2[index2]===text1[index2]){
            return 2;
        }
        else if(text2.includes(text1[index2])){
            return 1;
        }
        else return -1;
    }
    else return undefined
}

export const letterCheck = (word,index)=>{
    const wordSplit = word.split('');
    for(let i=0;i<wordSplit.length;i++){
        if(i!==index && wordSplit[index]===wordSplit[i]){
            return true;
        }
    }
    return false;
}