import styled from "styled-components";
import List from "./List";
import { IoLogoGameControllerA, IoMdPerson } from 'react-icons/io'
import { FaStar, FaUserFriends } from "react-icons/fa";
import { TbCalendarTime} from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import {RxCountdownTimer} from 'react-icons/rx'
import {BsBookmarkFill} from 'react-icons/bs'
import {ImFlag} from 'react-icons/im'
import {MdOutlineEventAvailable} from 'react-icons/md'
import {GoGraph} from 'react-icons/go'

const SideList = ({children}) => {

    return (
        <>
            <Stdiv>
                <List><IoMdPerson/> Dongchan Alex Kim</List>
                <List><FaUserFriends/>친구찾기</List>
                <List><TbCalendarTime/>최신</List>
                <List><HiUserGroup/>그룹</List>
                <List><AiOutlineYoutube/>Watch</List>
                <List><RxCountdownTimer/>과거의 오늘</List>
                <List><BsBookmarkFill/>저장됨</List>
                <List><ImFlag/>페이지</List>
                <List><MdOutlineEventAvailable/>이벤트</List>
                <List><FaStar/>즐겨찾기</List>
                <List><GoGraph/>광고 관리자</List>
                <List><IoLogoGameControllerA/>게임 동영상</List>
                <List>게임하기</List>
                <List>광고 센터</List>
                <List>기부 켐페인</List>
                <List>기후 과학 센터</List>
                <List>라이브 방송</List>
                <List>재난 안전 확인</List>
                <List>최근 광고 활동</List>
                <List>헌혈</List>
                <List>Messenger</List>
                <List>Meta Quest</List>
            </Stdiv>
            {children}
        </>
    )
}

export default SideList;

const Stdiv = styled.div`
    margin-top: 60px;
    padding-top: 15px;
    padding-left: 5px;
    width : 350px;
    height : 100vh;
    position: fixed;
    :hover{
        overflow: auto;
    }
    z-index: 0;
`
