import Body from "../BodyComponent/Body";
import Header from "../HeaderComponents/Header";
import RightSideList from "../RightSideList/RightSideList";
import SideList from "../SideList/SideList";


const Main = (props) => {
    return (
        <Header>
            <SideList>
                <RightSideList>
                    <Body>
                    </Body> 
                </RightSideList>
            </SideList>
        </Header>
    )
}

export default Main;