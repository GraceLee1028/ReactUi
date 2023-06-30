import {useState} from "react";

export default function CountWait(){
 const [pending,setPending] = useState(0);
 const [completed,setCompleted] = useState(0);
 const handleBuy = ()=>{
  setPending(pending+1);
  setPending(pending+1);
 }
 return (
  <>
    <p>等待：{pending}</p>
    <p>完成：{completed}</p>
    <button onClick={handleBuy}>购买</button>
  </>
 )
}