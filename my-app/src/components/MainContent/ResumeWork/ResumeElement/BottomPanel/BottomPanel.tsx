import styled from 'styled-components'
import { Colors } from '../../../../../styledHelpers/Colors'

const Wrapper = styled.ul`
    display: flex;
    justify-content: space-around;
    color: ${ Colors.grey };
    font-size: 0.8em;
`

export const BottomPanel = () => (
    <Wrapper>
        <li>Subsid. corp.</li>
        <li>Client contract</li>
        <li>Updated 3 days ago by John Doe</li>
    </Wrapper>
)