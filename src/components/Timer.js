import React, {useState,useEffect} from "react";

const Timer = ({initialTime}) => {
    const[timeLeft,setTimeLeft]=useState(initialTime);

    useEffect(()=>{
        const timerInterval=setInterval(()=>{
            if(timeLeft>0){
                setTimeLeft(timeLeft-1);
            }else{
                clearInterval(timerInterval);
            }
        },1000);
    

    return ()=>{
        clearInterval(timerInterval);
    };
},[timeLeft]);

const minutes=Math.floor(timeLeft/60);
const seconds=timeLeft%60;

return(
    <div>
        <span>Time Left: {minutes}:{seconds<10?'0':''}{seconds}</span>
    </div>
  );
};
 
export default Timer;