import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import useDropdown from 'react-dropdown-hook';
import { ExpandedMenu } from '../ExpandedMenu/ExpandedMenu'
import { HomeButton } from '../HomeButton/HomeButton';

const TopBar = styled.header`
    background-color: ${Colors.white};
    position: fixed;
    box-sizing: border-box;
    width: 100vw;
    padding: 0.7em;
`
const MenuWrapper = styled.div`
    display: flex;
    justify-content: left;
    color: #023144;
`

export const Header = () => {
    const [ wrapperRef, dropdownOpen, toggleDropdown ] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }

    return (
        <TopBar>
            <MenuWrapper ref={wrapperRef}>
                <div onClick={menuHandler}>
                    <HomeButton />
                </div>
                {dropdownOpen &&
                    <ExpandedMenu />}
            </MenuWrapper>
        </TopBar>
    )
}