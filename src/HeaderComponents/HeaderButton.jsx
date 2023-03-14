import { useNavigate } from "react-router-dom";

const HeaderButton = ({children}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> {navigate('/');}}>{children}</div>
    )
}

const HeaderMypage = ({children}) => {
    const navigate = useNavigate();
    return(
        <div onClick={()=>{
            navigate('/Mypage');
        }}>{children}</div>
    )
}

export {HeaderButton, HeaderMypage}