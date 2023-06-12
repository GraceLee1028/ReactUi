import Profile from "./Profile";

export default function Gallery(){
  const person = {
    imageId:'123',
    imageSize:12
  }
  return (
    <div className="gallery">
      <Profile name={person.imageId+person.imageSize+'.jpg'}/>
      <Profile/>
      <Profile/>
    </div>
  )
}