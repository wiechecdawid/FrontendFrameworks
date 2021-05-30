import styled from 'styled-components'
import { BottomPanel } from './BottomPanel/BottomPanel'
import { Colors } from '../../../../styledHelpers/Colors'

interface Props {
    title: string,
    content: string
}

const ResumeWrapper = styled.div`
    background-color: ${ Colors.white };
    margin-bottom: 5px;
    padding: 2px;
    
    & h3 {
        color: blue;
    }

    & div {
        padding-left: 5px;
        text-align: left;
    }
`

export const ResumeElement = ({ title, content }: Props) => (
    <ResumeWrapper>
        <h3>{title}</h3>
        <div>{ content }</div>
        <BottomPanel />
    </ResumeWrapper>
)