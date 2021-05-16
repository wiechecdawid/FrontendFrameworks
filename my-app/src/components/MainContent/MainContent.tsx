import styled from 'styled-components'
import { LatestPublications } from './LatestPublications/LatestPublications'

const MainContextWrapper = styled.div`
    margin: 2vw
`

export const MainContent = () => (
    <MainContextWrapper>
        <LatestPublications />
    </MainContextWrapper>
)