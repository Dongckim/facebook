import styled from "styled-components"

const HeaderSection = ({children}) => {

    return (
        <Stdiv>
            {children}
        </Stdiv>
    )
}

export default HeaderSection

const Stdiv = styled.div`
    width: 120px;
    height: 55px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    :hover{
        background-color: #ebebeb;
        border-radius: 10px;
        cursor: pointer;
    }
`