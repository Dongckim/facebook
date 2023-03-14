import styled from "styled-components"

const ModalContent = ({children}) => {

    return(
        <>
            <STdiv>
                {children}
            </STdiv>
        </>
        
    )

}

export default ModalContent

const STdiv = styled.div`
    background-color: white;
    box-shadow:0 2px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 500px;
    height: 350px;
    margin: auto;
    margin-top : 200px;
    border-radius: 10px;
    z-index: 3;
`