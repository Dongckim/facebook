import styled from "styled-components";
import Header from "../HeaderComponents/Header";
import SideList from "../SideList/SideList";

const Detail = () => {

    return (
        <Header>
            <SideList>
                <Stdiv>글을 쓰면 자세하게 볼 수 있는 페이지에요</Stdiv>
            </SideList>
        </Header>
    )
}

export default Detail;

const Stdiv = styled.div`
    padding-top: 60px;
    padding-Left: 360px;
    background-color: #ededf1;
    height: 100vh;
    margin: auto;
`