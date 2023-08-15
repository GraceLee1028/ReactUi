import { useRouteError } from "react-router-dom";
export default function ErrorPage(){
  const error = useRouteError();
  console.log(error)
  return (
    <div id="error-page">
      <h1>oops!</h1>
      <p>非常抱歉，页面请求报错</p>
      <p>
        <i>{error.statusText}{error.message}</i>
      </p>
    </div>
  )
}