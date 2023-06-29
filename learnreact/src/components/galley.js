import {useState} from 'react';
import LeButton from './button';
import Profile from "./Profile";
import {personList} from "../utils/common.data"

export default function Gallery({children}){
  const [index,setIndex] = useState(0);
  const hasNext = index<personList.length-1
  function handleNextClick(){
    if(hasNext){
      setIndex(index + 1)
    }else{
      setIndex(0)
    }
  }
  const profileList = personList.map((person,i)=>{
    return (
      <Profile className={index===i?'active':''} key={'person'+i} isCheck={i%2===0} person={person} />
    )
  })
  return (
    <div className="gallery">
      {profileList}
      <p>{index}</p>
      <LeButton onClick={handleNextClick}>切换</LeButton>
    </div>
  )
}