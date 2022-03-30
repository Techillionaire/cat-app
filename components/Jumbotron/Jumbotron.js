import React from 'react'
import { useRouter } from 'next/router'

const Jumbotron = () => {
  const router = useRouter();

  return (
    

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cat world!</h1>
        <p className="lead">Find your new bestfriend today. Adopt a wonder Cat.</p>
        <button type="button" className="btn btn-primary" onClick={() => router.push('/cats')}>Start looking</button>

      </div>
    </div>
  )
}

export default Jumbotron