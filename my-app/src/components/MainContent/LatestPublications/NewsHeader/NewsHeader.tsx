import React from 'react'
import styled from 'styled-components'
import streetView from '../../../../assets/images/view.jpg'

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

export const NewsHeader = () => (
    <Image>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum lorem id interdum tempor. Aenean hendrerit porta aliquet. Suspendisse consequat pharetra placerat. Sed viverra congue tempor. Fusce faucibus at urna tincidunt tempus. Integer fringilla pharetra est rutrum consectetur. Maecenas id erat enim.
        </p>
    </Image>
)