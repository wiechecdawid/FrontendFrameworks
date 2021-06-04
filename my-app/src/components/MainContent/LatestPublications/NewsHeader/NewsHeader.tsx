import styled from 'styled-components'
import streetView from '../../../../assets/images/view.jpg'

interface Props {
    title: string,
    body: string
}

const Image = styled.div`
    min-width: 40%;
    min-height: 25vw;
    background-image: url(${streetView});
    position: relative;

    & img {
        width: 100%;
        overflow: hidden;        
    }

    &:hover {
        opacity: .5;
    }
`

export const NewsHeader = ({title, body}: Props) => (
    <Image>
        <h1>{ title }</h1>
        <p>
            { body }
        </p>
    </Image>
)