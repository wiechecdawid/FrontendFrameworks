import styled from 'styled-components'
import avatar from '../../../assets/images/random.jpg'
import { Avatar } from '../../common/Avatar/Avatar'
import { Colors } from '../../../styledHelpers/Colors'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    font-size: .7em;
    border-bottom: 1px solid ${ Colors.grey };
    width: 100%;
`

export const ProfileHeader = () => (
    <Wrapper>
        <Avatar>
            <img src={avatar} alt="avatar" />
            <p>See Profile</p>
        </Avatar>
        <div>
            <h3>First Last</h3>
            <h4>Clifford Chance</h4>
            <h5>New York</h5>
            <p>Partner</p>
        </div>
        <div>
            <p>firstlast@example.com</p>
            <p>+33 (0)6 12 34 56 78</p>
        </div>
    </Wrapper>
)