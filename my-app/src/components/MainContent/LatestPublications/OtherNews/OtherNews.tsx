import styled from 'styled-components'
import { News } from './News/News'

const DivTitle = styled.div`
    font-size: 2em;
`

const OtherNewsWrapper = styled.div`
    padding: 1em;
`

export const OtherNews = () => (
    <OtherNewsWrapper>
        <DivTitle>Latest Publications</DivTitle>
        <News />
        <News />
        <News />
        <div>See more publications</div>
    </OtherNewsWrapper>
)