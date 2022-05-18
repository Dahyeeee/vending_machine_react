import {Link} from "react-router-dom";

function Tap({title}){
    return(
        <div>
            <h1>{title}</h1>
                <span className="tap">
                <button><Link to='/'>상품 관리</Link></button>
                <button><Link to='/topup'>잔돈 충전</Link></button>
                <button><Link to='/purchase'>상품 구매</Link></button>
            </span>
       </div>
    )
}

export default Tap;