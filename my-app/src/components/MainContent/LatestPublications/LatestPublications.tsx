import styled from 'styled-components'
import { Colors } from '../../../styledHelpers/Colors'
import { NewsHeader } from './NewsHeader/NewsHeader'
import { OtherNews } from './OtherNews/OtherNews'

const LatestDiv = styled.div`
    display: flex;
    background-color: ${Colors.white}
`

const OtherWrapper = styled.div`
    
`

export const LatestPublications = () => (
    <LatestDiv>
        <NewsHeader />
        <OtherNews />
    </LatestDiv>
)