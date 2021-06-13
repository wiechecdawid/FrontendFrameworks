import { ChangeEventHandler } from 'react';
import { KeyboardEventHandler, useState } from 'react';
import styled from'styled-components'
import { Colors } from '../../styledHelpers/Colors';

const MenuList = styled.ul`
    list-style-type: none;
    position: absolute;
    z-index:2;

    & li {
        width: 100%;
        background-color: ${Colors.white};
        border: 1px solid ${Colors.black};
    }
`

const Filter = styled.input`
`

const initialItems = [ 'Home', 'Publications', 'People', 'Entities', 'Administration' ]

export const ExpandedMenu = () => {
    const [ menuItems, setItems ] = useState(initialItems);

    const onFilterChanged: ChangeEventHandler<HTMLInputElement> = (ev) => {
        const filter = ev.target as HTMLInputElement;
        const val = filter.value.toLowerCase();

        function meetsFilterValue(el: string): boolean {
            return el.toLowerCase().slice(0, val.length) === val
        }

        setItems( () => val.length == 0 ? initialItems : initialItems.filter(meetsFilterValue) );
    }
    
    return (
        <>
            <Filter placeholder="Filter..." onChange={onFilterChanged} />
            <MenuList>
                {menuItems.map( item => 
                    <li key={item}>{item}</li>)}
            </MenuList>
        </>
    )
}