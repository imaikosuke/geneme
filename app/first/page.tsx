import Link from 'next/link'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>First</h1>
      <Link href='/second'>
        <p>Go to second</p>
      </Link>
    </div>
  )
}

export default First