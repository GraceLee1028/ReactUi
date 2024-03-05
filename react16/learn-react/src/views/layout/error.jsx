import {useRouteError} from "react-router-dom"
import errorImg from "@/assets/images/status/10003.png";
export default function Error() {
    const error = useRouteError();
    return <div className="error-page center-middle">
        <img src={errorImg} alt="404" />
        <h1>您好</h1>
        <p>非常抱歉，您当前访问的页面不存在！</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
}