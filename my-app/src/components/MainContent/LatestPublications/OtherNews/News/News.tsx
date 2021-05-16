import styled from 'styled-components'
import streetView from '../../../../../assets/images/view.jpg'

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

export const News = () => (
    <NewsWrapper>
        <img src={streetView} />
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro saepe aperiam atque in? Pariatur porro, asperiores in expedita molestias, voluptas distinctio earum consequatur a quaerat obcaecati aut minima minus?</div>
    </NewsWrapper>
)