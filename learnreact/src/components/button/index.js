export default function LeButton({children,type,onClick}){
  return (
    <>
    <button type={type||'button'} className="le-button" onClick={onClick}>
      <span className="le-button__content">{children}</span>
    </button>
    </>
  )
}