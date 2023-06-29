import {useState} from "react";
import LeButton from './button';

export default function FormDemo(){
  const [msg,setMsg] = useState('你好');
  const [name,setName] = useState('lee');
  const [count,setCount] = useState(0);
  function handleSubmit(e){
    e.preventDefault();
    alert(`you send ${msg} to ${name}`)
    setCount(count+1)
    console.log(count)
  }
  function increment(){
    setCount(count=>count+1)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className='form-item'>
        用户：
        <select value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="请选择姓名">
          <option value='lee'>lee</option>
          <option value='joe'>joe</option>
        </select>
      </label>
      <label className='form-item'>
        消息：
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="请输入消息"></textarea>
      </label>
      <label className="form-item">
        发送次数:
        {count}
      </label>
      <LeButton onClick={handleSubmit}>提交</LeButton>
      <LeButton onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</LeButton>
    </form>
  )
}