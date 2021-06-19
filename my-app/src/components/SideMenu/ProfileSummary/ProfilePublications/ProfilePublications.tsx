import styled from 'styled-components'
import publications from '../../../../assets/icons/publications.png'
import plus from '../../../../assets/icons/plus.png'

const PublicationsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.7em;

    &:hover {
        border: 1px solid;
        cursor: pointer;
    }
`

const PublicationsLogo = () => (
    <div>
        <img src={publications} alt="Publications" />
    </div>
)

const UserPlusLogo = () => (
    <div>
        <img src={plus} alt="User plus" />
    </div>
)

export const ProfilePublications = () => (
    <PublicationsWrapper>
        <PublicationsLogo />
        <div>Your Publications</div>
        <UserPlusLogo />
    </PublicationsWrapper>
)