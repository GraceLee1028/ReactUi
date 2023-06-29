function Profile({person,isCheck,className}){
  return (
    <div className={`profile ${className}`}>
    {isCheck&&(<input type="checkbox" checked={true} readOnly/>)}
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <img src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
    </div>
  )
}
export default Profile