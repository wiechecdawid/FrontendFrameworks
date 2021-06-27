import styled from 'styled-components'
import avatar from '../../../assets/images/random.jpg'
import { Colors } from '../../../styledHelpers/Colors'
import { ProfileNetwork } from './ProfileNetwork/ProfileNetwork'
import { ProfilePublications } from './ProfilePublications/ProfilePublications'
import { Avatar } from '../../common/Avatar/Avatar'

const ProfileDiv = styled.div`
    width: 10vw;
    padding: 1vw;
    background-color: ${Colors.white};
    border-radius: 5%;

    & a {
        text-decoration: none;
        color: ${ Colors.black };
    }
`

const NameDiv = styled.div`
    color: #089acd;
    font-size: 0.8em
`

const JobInfo = styled.div`
    color: #babdae;
    font-size: 0.6em;
    border-bottom: 2px solid #babdae;
    margin-bottom: 2px;
`

export const ProfileSummary = () => (
    <ProfileDiv>
        <a href="/profile">
            <Avatar>
                <img src={avatar} alt="avatar" />
            </Avatar>
            <NameDiv>First Second</NameDiv>
            <JobInfo>Job title - Company</JobInfo>
        </a>
        <ProfileNetwork />
        <ProfilePublications />
    </ProfileDiv>
)