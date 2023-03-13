import styled from "styled-components";

const Header = ({children}) => {

    return (
        <>
            <STdiv>
                <div>
                    <button>F</button>
                    <input type="text" />
                </div>
                
                <div>
                    <button>Home</button>
                    <button>Friend</button>
                    <button>Shorts</button>
                    <button>Follow</button>
                </div>
                <div>
                    <button>Message</button>
                    <button>Notification</button>
                    <button>Mypage</button>
                </div>
            </STdiv>
            {children}
        </>
    )
        
}

export default Header;

const STdiv = styled.div`
    background-color: #ffffff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 40px -5px #8d8c8c;
    z-index: 0;

`