import styled from "styled-components";
import List from "./List";
import { useQuery } from "react-query";
import { getContacts } from "../api/contacts";

const RightSideList = ({children}) => {
    const { data } = useQuery('contacts', getContacts)
    return(
        <>
            <STdiv>
                <STLabel>
                    연락처
                    <div>+</div>
                </STLabel>
                {data?.map((item)=>{
                    return(
                        <List key = {item.id}>{item.name}</List>
                    )
                })}
            </STdiv>
            {children}
        </>
    )
}

export default RightSideList;

const STdiv = styled.div`
    display : block;
    margin-top: 60px;
    padding-top: 15px;
    padding-right: 5px;
    width : 350px;
    height : 100vh;
    position: fixed;
    margin-left: 75%;
    :hover{
        overflow: auto;
    }
    z-index: 0;
`
const STLabel = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    opacity: 60%;
    font-size: 20px;
    padding : 10px 15px 5px 42px;
`