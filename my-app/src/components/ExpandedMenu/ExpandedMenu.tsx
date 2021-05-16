import styled from'styled-components'
import { Colors } from '../../styledHelpers/Colors';

const MenuList = styled.ul`
    list-style-type: none;
    position: absolute;
    z-index:2;

    & li {
        background-color: ${Colors.white};
        border: 1px solid ${Colors.black};
    }
`

export const ExpandedMenu = () => {
    const menuItems = [ 'Home', 'Publications', 'People', 'Entities', 'Administration' ];
    
    return (
        <MenuList>
            {menuItems.map( item => 
                <li key={item}>{item}</li>)}
        </MenuList>
    )
}