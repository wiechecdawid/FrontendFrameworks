import { ProfileSummary } from './ProfileSummary/ProfileSummary'
import { SideOption } from './SideOption/SideOption'

export const SideMenu = () => (
    <div>
        <ProfileSummary />
        <SideOption option='Publications' />
        <SideOption option='Ecosystem' />
        <SideOption option='Entities' />
    </div>
)