import styled from 'styled-components'
import streetView from '../../../../../assets/images/view.jpg'
import { Post } from '../../../../../entities/post'

interface Props {
    post: Post
}

const NewsWrapper = styled.div`
    display: flex;

    & > * {
        height: 35%;
        overflow: hidden;
    }

    & div {
        padding: .5em;     
    }

    & img {
        width: 35%;
    }
`

export const News = ({ post }: Props) => (
    <NewsWrapper>
        <img src={streetView} />
        <div>{ post.body }</div>
    </NewsWrapper>
)