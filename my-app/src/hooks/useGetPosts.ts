import { useEffect, useState } from 'react'
import { Post } from '../entities/post'
import { Service } from '../entities/service'

export const useGetPosts = () => {
    const [ result, setResult ] = useState<Service<Post[]>>({
        status: 'loading'
    })

    useEffect( () => {
        fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then( response => response.json() )
        .then( data => setResult( () => {
            return {
                status: 'loaded',
                payload: [...data]
            }
        }))
        .catch( err => setResult({status: 'error', error: err}) );
    }, []);

    return result;
}