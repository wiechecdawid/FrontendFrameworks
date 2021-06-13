import { FC } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../styledHelpers/Colors'

interface Props {}

const PageWrapper = styled.div`
    background-color: ${ Colors.white };
    width: 80vw;
    margin: 2em auto;
`

const Page: FC<Props> = ( { children } ) => (
    <PageWrapper>
        { children }
    </PageWrapper>
)

export default Page