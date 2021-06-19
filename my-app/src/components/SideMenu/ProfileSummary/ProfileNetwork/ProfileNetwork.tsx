import styled from 'styled-components'
import network from '../../../../assets/icons/network.png'
import userPlus from '../../../../assets/icons/user-plus.png'

const NetworkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.7em;

    &:hover {
        border: 1px solid;
        cursor: pointer;
    }
`

const NetworkLogo = () => (
    <div>
        <img src={network} alt="Network logo" />
    </div>
)

const UserPlusLogo = () => (
    <div>
        <img src={userPlus} alt="User logo" />
    </div>
)

export const ProfileNetwork = () => (
    <NetworkWrapper>
        <NetworkLogo />
        <div>Your Network</div>
        <UserPlusLogo />
    </NetworkWrapper>
)