import styled from 'styled-components'

interface Props {
    content: string;
}

const StyledSubtitle = styled.div`
    font-size: 2em;
    margin: 1em;
`

export const Subtitle = ({ content }: Props) => (
    <StyledSubtitle>{content}</StyledSubtitle>
)