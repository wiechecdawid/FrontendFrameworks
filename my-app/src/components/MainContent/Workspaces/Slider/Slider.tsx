import { FC } from 'react'
import styled from 'styled-components'

interface Props {
}

const SliderWrapper = styled.div`
    display: flex;

    & > * {
        margin: .1em .4em;
    }
`

export const Slider: FC<Props> = ({ children }) => (
    <SliderWrapper>
        { children }
    </SliderWrapper>
)