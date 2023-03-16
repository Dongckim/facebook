import { useSelector } from "react-redux";
import Body from "../BodyComponent/Body";
import Header from "../HeaderComponents/Header";
import LogoutPage from "../LogoutPage/LogoutPage";
import RightSideList from "../RightSideList/RightSideList";
import SideList from "../SideList/SideList";


const Main = (props) => {
    const { users, error, isLogin } = useSelector((state) => state.login);

    return (
        <Header>
            {isLogin?(
                <SideList>
                    <RightSideList>
                        <Body>
                        </Body> 
                    </RightSideList>
                </SideList>
            ):(
                <LogoutPage>
                    <SideList>
                        <RightSideList>
                            <Body>
                            </Body> 
                        </RightSideList>
                    </SideList>
                </LogoutPage>
            )}
        </Header>
    )
}

export default Main;