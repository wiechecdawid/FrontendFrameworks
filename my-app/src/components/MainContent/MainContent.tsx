import styled from 'styled-components'
import { LatestPublications } from './LatestPublications/LatestPublications'
import { Workspaces } from './Workspaces/Workspaces'

const MainContextWrapper = styled.div`
    margin: 2vw;
    max-width: 78vw
`

export const MainContent = () => (
    <MainContextWrapper>
        <LatestPublications />
        <Workspaces />
    </MainContextWrapper>
)