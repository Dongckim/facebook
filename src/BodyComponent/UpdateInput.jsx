import { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "./BodyPost";

const UpdateInput = ({children}) => {
    const {input, setInput, content} = useContext(InputContext)
    const value = content.find((item)=>item.id == children).body
    const onchangeHandler = (event) => {
        setInput(event.target.value)
    }

    return(
        <Stdiv>
            <Stinput placeholder="수정할 사항을 입력해주세요"  
            defaultValue = {value} 
            onChange={onchangeHandler}/>
        </Stdiv>
    )
}

export default UpdateInput;

const Stdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Stinput = styled.input`
    margin-top:20px;
    width : 550px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: #ededed;
    text-indent: 1em;
`