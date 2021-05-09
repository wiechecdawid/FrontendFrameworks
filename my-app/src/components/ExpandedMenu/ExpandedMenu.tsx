import styled from'styled-components'

const MenuList = styled.ul`
    list-style-type: none;
    position: absolute;
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