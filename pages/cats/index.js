import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import Card from '../../components/Card/Card'

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
        <Nav />
        <div className='container mt-5'>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
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
      
      </>
    
  )
}

export default index