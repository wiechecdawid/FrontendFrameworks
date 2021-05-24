import styled from 'styled-components'

const SliderWrapper = styled.div`
    display: flex;

    & > * {
        margin: .1em .2em;
    }
`

export const Slider = () => (
    <SliderWrapper />
)