import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "../pages/Detail"
import Main from "../pages/Main"
import Mypage from "../pages/Mypage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<Main/>}/>
                <Route path='/Mypage' element={<Mypage/>}/>
                <Route path ='/Detail' element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;