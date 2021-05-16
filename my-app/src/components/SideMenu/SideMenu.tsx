import styled from 'styled-components'
import { ProfileSummary } from './ProfileSummary/ProfileSummary'
import { SideOption } from './SideOption/SideOption'

const SideMenuWrapper = styled.div`
    margin: 2vw;
`

export const SideMenu = () => (
    <SideMenuWrapper>
        <ProfileSummary />
        <SideOption option='Publications' />
        <SideOption option='Ecosystem' />
        <SideOption option='Entities' />
    </SideMenuWrapper>
)