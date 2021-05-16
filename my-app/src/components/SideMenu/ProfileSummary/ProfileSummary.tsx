import styled from 'styled-components'
import avatar from '../../../assets/images/random.jpg'
import { Colors } from '../../../styledHelpers/Colors'
import { ProfileNetwork } from './ProfileNetwork/ProfileNetwork'
import { ProfilePublications } from './ProfilePublications/ProfilePublications'

const ProfileDiv = styled.div`
    width: 10vw;
    padding: 1vw;
    background-color: ${Colors.white};
    border-radius: 5%;
`

const Avatar = styled.div`
    text-align: center;
    & img {
        border-radius: 50%;
        overflow: hidden;
        width: 70%;
        align-self: center;
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
`

export const ProfileSummary = () => (
    <ProfileDiv>
        <Avatar>
            <img src={avatar} alt="avatar" />
        </Avatar>
        <NameDiv>First Second</NameDiv>
        <JobInfo>Job title - Company</JobInfo>
        <ProfileNetwork />
        <ProfilePublications />
    </ProfileDiv>
)