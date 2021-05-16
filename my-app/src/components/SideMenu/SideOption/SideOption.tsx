import { FC } from 'react'
import styled from 'styled-components'
import publications from '../../../assets/icons/publications.png'
import ecosystem from '../../../assets/icons/ecosystem.png'
import entities from '../../../assets/icons/entities.png'

interface IProps {
    option: string
}

const OptionWrapper = styled.div`
    display: flex;
    padding: 0.8em 0em 0em 1em;

    & img {
        height: 1em;
        width: 1em;
        padding-right: 0.5em;
    }
`


export const SideOption: FC<IProps> = ( { option } ) => {
    const icon = () => {
        switch(option) {
        case 'Publications':
            return publications;
        case 'Ecosystem':
            return ecosystem;
        default:
            return entities;
        }
    }

    return (
        <OptionWrapper>
            <img src={icon()} alt="option" />
            <div>{option}</div>
        </OptionWrapper>
    )
}