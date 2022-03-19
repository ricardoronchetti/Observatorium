import lostInSpace from "./../../assets/images/404img.jpeg"
import "./ErrorPage.css"

function ErrorPage() {
    return (
        <div className="stars">
            <div className="twinkling">
                <div className="errorPage">
                    <h1>Error Page 404</h1>
                    <img className="mx-auto" src={lostInSpace} />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage