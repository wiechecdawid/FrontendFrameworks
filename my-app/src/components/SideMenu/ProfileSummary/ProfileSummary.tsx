import styled from 'styled-components'
import { Colors } from '../../../styledHelpers/Colors'

const ProfileDiv = styled.div`
    width: 15vw;
    margin: 5vw;
    padding: 5vw;
    background-color: ${Colors.white};
`

export const ProfileSummary = () => (
    <ProfileDiv></ProfileDiv>
)