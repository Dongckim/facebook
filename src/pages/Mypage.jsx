import { Link } from "react-router-dom";
import Header from "../HeaderComponents/Header";

const Mypage = () => {

    return(
        <Header>
            <div style={{paddingTop:'60px'}}>
                <input type="text" />
                <input/>
            </div>
            <Link to={'/'}>돌아가기</Link>
        </Header>
    )
}

export default Mypage;