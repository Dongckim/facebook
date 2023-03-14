import styled from "styled-components";

const ModalLayout = ({children}) => {
    
    return ( 
        <>
            <Layout>
            </Layout>
            {children}
        </>
        
        )
}

export default ModalLayout;

const Layout = styled.div`
    position: fixed;
    background-color: #ededed;
    opacity : 0.7;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
`