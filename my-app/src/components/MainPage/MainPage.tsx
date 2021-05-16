import styled from "styled-components"
import { SideMenu } from "../SideMenu/SideMenu";
import { MainContent } from "../MainContent/MainContent"

const MainDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const MainPage = () => (
    <MainDiv>
        <SideMenu />
        <MainContent />
    </MainDiv>
)