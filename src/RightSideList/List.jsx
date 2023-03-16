import { IoMdPerson } from "react-icons/io"
import styled from "styled-components"

const List = ({children}) => {
    return (
        <Stdiv>
            <span style = {{fontSize:'25px', color:'gray'}}>
                <IoMdPerson/>
            </span>
            {children}
        </Stdiv>
    )
}

export default List

const Stdiv = styled.div`
    width: 310px;
    height: 60px;
    
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 0.2;
    padding-left: 20px;
    margin-left: 20px;
    :hover{
        background-color: #cfcfcf;
        border-radius: 12px;
    }
    cursor: pointer;
`