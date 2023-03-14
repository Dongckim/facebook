import styled from "styled-components";

const HeaderInput = () => {

    return (
        <Stinput type="text" placeholder='Facebook 검색' ></Stinput>
    )
}

export default HeaderInput;

const Stinput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 240px;
    border-radius: 20px;
    border: none;
    background-color: #ebebeb;
    text-indent: 1em;
`