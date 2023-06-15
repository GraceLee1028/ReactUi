export default function LeButton({children,type}){
  return (
    <>
    <button type={type||'button'} className="le-button">
      <span className="le-button__content">{children}</span>
    </button>
    </>
  )
}