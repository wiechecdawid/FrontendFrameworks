import styled from 'styled-components'
import { useGetPosts } from '../../../hooks/useGetPosts'
import { Colors } from '../../../styledHelpers/Colors'
import { NewsHeader } from './NewsHeader/NewsHeader'
import { OtherNews } from './OtherNews/OtherNews'

const LatestDiv = styled.div`
    display: flex;
    background-color: ${Colors.white}
`
 

export const LatestPublications = () => {
    const service = useGetPosts();

    return (
            <>
                { service.status === 'loading' && <div>Loading...</div> }
                { service.status === 'loaded' && 
                    <LatestDiv> 
                        <NewsHeader title={ service.payload[0].title} body={service.payload[0].body } /> 
                        <OtherNews posts={ service.payload } />
                    </LatestDiv> }
                { service.status === 'error' && (
                    <div>Error: {service.status}</div>
                )}
            </>
        )
}