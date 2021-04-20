import Head from 'next/head'
import {  GetStaticProps } from 'next';
import {useEffect} from 'react';
import Link from 'next/link'

type Props = {
    data : any;
}


export default function Emre (props:Props) :JSX.Element{


    useEffect(()=>{

        let myObj = props.data.message;
        let dog:any;

       
        
        console.log(Object.keys(myObj));
        // myObj.map(element => {
        //     console.log(element);
            
        // });
    },[]);

    return(
        <>
        {
            Object.keys(props.data.message).map((dog,index)=>(

             <Link href={'https://www.localhost:3000/'+dog} key={index}>
                <div style={{border:'0.1vw solid black'}}>
                  <h1> {dog} </h1>
                </div>
             </Link>
            ))
        }
        
        
        
        
        </>
      
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json()

        
    return {
      props: {
          data
      }, // will be passed to the page component as props
    }
  }