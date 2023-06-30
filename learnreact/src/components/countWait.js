import {useState} from "react";
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
export default function CountWait(){
 const [pending,setPending] = useState(0);
 const [completed,setCompleted] = useState(0);
 const handleBuy = async ()=>{
  setPending(pending+1);
  await delay(3000);
  //
  setPending(n=>n-1);//更新函数加入到更新队列
  setCompleted(n=>n + 1);
 }
 return (
  <>
    <p>等待：{pending}</p>
    <p>完成：{completed}</p>
    <button onClick={handleBuy}>购买</button>
  </>
 )
}