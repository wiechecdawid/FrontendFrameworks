import { FC } from 'react'
import styled from 'styled-components'

interface Props {}

const Wrapper = styled.div`
    text-align: center;
    & img {
        border-radius: 50%;
        overflow: hidden;
        width: 70%;
        align-self: center;

        &:hover {
            width: 80%;
            cursor: pointer;
        }
    }
`

export const Avatar: FC<Props> = ( { children } ) => (
    <Wrapper>
        { children }
    </Wrapper>
)