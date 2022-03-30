import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'
import DefaultLayout from '../../layouts/Defaults';
import Head from 'next/head'

const index = () => {
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
      const response = await fetch("/api/cats");
      const data = await response.json(); 
      setCats(data);
    };
  
    useEffect(() => {
      fetchCats();
    }, []);

  return (
      <>
        <Head>
            <title>Our Cats</title>
            <meta name="description" content="I don sabi this thing ooo" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <DefaultLayout>
            <div className='container mt-5'>
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'}}>

                    { cats.map (cat => (
                        <Card 
                            name={cat.name}
                            id={cat.id}
                            phone={cat.phone}
                            email={cat.email}
                            image={cat.image}
                        />
                    ))}
                </div>
            </div>

        </DefaultLayout>
        
      
      </>
    
  )
}

export default index