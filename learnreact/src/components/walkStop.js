import {useState} from 'react';
function ColorStatus({index,children}){
  const d = [{
    status:1,text:'红灯停',
  },{status:2,text:'绿灯行',}]
  return <div>
    <span style={{color:d[index].status===1?'red':'green'}}>{d[index].text}</span>
    <div>
      {children.map(item=>{
        return item
      })}
    </div>
    </div>
}
export default function WalkStop(){
  const [index,setIndex] = useState(0)
  const handleStatus = function(){
    setIndex(index===1?0:1)
  }
  return (<>
    <ColorStatus index={index}>
      <p>红绿灯demo</p>
      <button onClick={handleStatus}>{index===1?'红灯':'绿灯'}</button>
    </ColorStatus>
  </>)
}