import {GetStaticPaths} from 'next'
import { useRouter } from 'next/router';


export default function DogPage(props) {

    return(
        <>
        <h1> Hello this is Emre</h1>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: '4903' } }, { params: { id: '9' } }],
        fallback: 'blocking' // We want to be able to add new sites after deployment
    };
};