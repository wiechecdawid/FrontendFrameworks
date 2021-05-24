import styled from 'styled-components'
import { News } from './News/News'
import { Subtitle } from '../../../common/Subtitle/Subtitle'

const OtherNewsWrapper = styled.div`
    padding: 1em;

    & > div {
        margin-top: 2%;
    }
`

export const OtherNews = () => (
    <OtherNewsWrapper>
        <Subtitle content="Latest Publications" />
        <News />
        <News />
        <News />
        <div>See more publications</div>
    </OtherNewsWrapper>
)