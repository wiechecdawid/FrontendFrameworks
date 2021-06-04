import styled from 'styled-components'
import { News } from './News/News'
import { Subtitle } from '../../../common/Subtitle/Subtitle'
import { Post } from '../../../../entities/post'

interface Props {
    posts: Post[]
}

const OtherNewsWrapper = styled.div`
    padding: 1em;

    & > div {
        margin-top: 2%;
    }
`
export const OtherNews = ({posts}: Props) => (
    <OtherNewsWrapper>
        <Subtitle content="Latest Publications" />
        <News post={ posts[1] } />
        <News post={ posts[2] } />
        <News post={ posts[3] } />
        <div>See more publications</div>
    </OtherNewsWrapper>
)