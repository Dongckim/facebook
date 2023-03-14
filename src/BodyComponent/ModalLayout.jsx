import styled from "styled-components";

const ModalLayout = ({children}) => {
    
    return ( 
        <>
            <Layout>
                {children}
            </Layout>
        </>
        
        )
}

export default ModalLayout;

const Layout = styled.div`
    border: 2px solid black;
    position: fixed;
    background-color: rgb(255,255,255, 0.7);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
`