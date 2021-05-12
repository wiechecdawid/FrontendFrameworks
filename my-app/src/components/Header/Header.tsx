import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import useDropdown from 'react-dropdown-hook';
import { ExpandedMenu } from '../ExpandedMenu/ExpandedMenu'
import { HomeButton } from '../HomeButton/HomeButton';
import { ReactLogo } from '../ReactLogo/ReactLogo';
import { SearchBar } from '../SearchBar/SearchaBar';
import { RightSide } from '../RightSide/RightSide';

const TopBar = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: ${Colors.white};
    box-sizing: border-box;
    width: 100vw;
    padding: 0.7em;
`
const MenuWrapper = styled.div`
    color: #023144;
`

export const Header = () => {
    const [ wrapperRef, dropdownOpen, toggleDropdown ] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }

    return (
        <TopBar>
            <ReactLogo />
            <MenuWrapper ref={wrapperRef}>
                <div onClick={menuHandler}>
                    <HomeButton />
                </div>
                {dropdownOpen &&
                    <ExpandedMenu />}
            </MenuWrapper>
            <SearchBar />
            <RightSide />
        </TopBar>
    )
}