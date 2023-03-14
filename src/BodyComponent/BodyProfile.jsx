import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import styled from "styled-components";

const BodyProfile = () => {
    return(
        <STprofile >
            <IoMdPerson/>
        </STprofile>
    )
}

export default BodyProfile;

const STprofile = styled.div`
    height: 40px;
    border-radius: 20px;
    width :40px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 32px;
    color: #ffffff;
    background-color: #c4c4c4;
`