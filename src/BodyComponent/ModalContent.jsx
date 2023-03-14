import styled from "styled-components"

const ModalContent = ({children}) => {

    return(
        <STdiv>
            {children}
        </STdiv>
    )

}

export default ModalContent

const STdiv = styled.div`
    background-color: white;
    width: 500px;
    height: 300px;
    margin: auto;
    margin-top : 200px;
    border-radius: 12px;
    z-index: 3;
`