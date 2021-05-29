import { FC } from 'react'
import { Colors } from '../../../../styledHelpers/Colors'
import styled from 'styled-components'

interface Props {
}

const SliderWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;

    & > * {
        margin: .1em .4em;
    }
`

const MoveButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
    z-index: 3;
    font-weight: bold;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: ${Colors.black};
    color: ${Colors.white};
    
    &:hover {
        opacity: 80%;
    }

    &.left {
        margin-left: 2%;
    }

    &.right {
        margin-right: 1%;
        right: 0px;
    }
`

export const Slider: FC<Props> = ({ children }) => (
    <SliderWrapper>
        { children }
        <MoveButton className="left">&lt;</MoveButton>
        <MoveButton className="right">&gt;</MoveButton>
    </SliderWrapper>
)