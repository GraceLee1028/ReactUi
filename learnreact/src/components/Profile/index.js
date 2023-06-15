function Profile({person,isCheck}){
  return (
    <>
    {isCheck&&(<input type="checkbox" checked="true" />)}
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <img src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
    </>
  )
}
export default Profile