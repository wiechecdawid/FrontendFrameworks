import { FC } from 'react'
import publications from '../../../assets/icons/publications.png'
import ecosystem from '../../../assets/icons/ecosystem.png'
import entities from '../../../assets/icons/entities.png'
import { OptionWrapper } from '../../common/OptionWrapper/OptionWrapper'
import Link from '../../common/Link/Link'

interface IProps {
    option: string
}

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