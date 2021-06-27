import styled from 'styled-components'
import { Colors } from '../../styledHelpers/Colors'

const ProfileWrapper = styled.div`
    background-color: ${ Colors.white };
    width: 80vw;
    margin: 20px auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

export const Profile = () => (
    <ProfileWrapper>
        Profile content...
    </ProfileWrapper>
)