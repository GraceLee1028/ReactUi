function Profile({name}){
  return (
    <>
    {name.imageId}{name.imageSize}
    <img src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
    </>
  )
}
export default Profile