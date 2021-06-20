import { FC } from 'react'
import styled from 'styled-components'
import publications from '../../../assets/icons/publications.png'
import ecosystem from '../../../assets/icons/ecosystem.png'
import entities from '../../../assets/icons/entities.png'
import { OptionWrapper } from '../../common/OptionWrapper/OptionWrapper'
import { Colors } from '../../../styledHelpers/Colors'

interface IProps {
    option: string
}

const Link = styled.a`
    text-decoration: none;
    color: ${ Colors.black }
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

    const path = `/${ option }`

    return (
        <Link href={ path }>
            <OptionWrapper>
                <img src={icon()} alt="option" />
                <div>{option}</div>
            </OptionWrapper>
        </Link>        
    )
}