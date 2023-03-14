import styled from "styled-components"

const List = ({children}) => {
    return (
        <Stdiv>
            <span style = {{fontSize:'25px'}}>
                {children[0]}
            </span>
            {children[1]}
        </Stdiv>
    )
}

export default List

const Stdiv = styled.div`
    width: 310px;
    height: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 20px;
    :hover{
        background-color: #cfcfcf;
        border-radius: 12px;
    }

`