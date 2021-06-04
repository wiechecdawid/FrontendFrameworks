import { FC, useState, useEffect, MouseEventHandler } from 'react'
import { Colors } from '../../../../styledHelpers/Colors'
import styled from 'styled-components'

interface Props {}

const SliderWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;

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
        left: 0px;
        margin-left: 2%;
    }

    &.right {
        margin-right: 1%;
        right: 0px;
    }
`

export const Slider: FC<Props> = ({ children }) => {
    const [ direction, setDirection ] = useState("row");

    const sideHandler: MouseEventHandler<HTMLButtonElement> = (ev) => {
        const but = ev.target as HTMLButtonElement;
        console.log(but.classList)

        setDirection( () => {
            if( direction === "row" )
                return but.classList.contains("rigth") ? "row-reverse" : "row"

            return but.classList.contains("left") ? "row" : "row-reverse"
        });
    }

    useEffect( () => {
        let wrapper = document.querySelector('.workspace-slider') as HTMLElement;
        wrapper.style.flexDirection = direction;

        console.log(`${direction}, ${wrapper.style.flexDirection}`)

    }, [ direction ])
    
    return (
        <SliderWrapper className="workspace-slider">
            { children }
            <MoveButton className="left" onClick={ sideHandler }>&lt;</MoveButton>
            <MoveButton className="right" onClick={ sideHandler }>&gt;</MoveButton>
        </SliderWrapper>
    )
}