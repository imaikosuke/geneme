import Link from 'next/link'
import React from 'react'

const Third = () => {
  return (
    <div>
      <h1>Third</h1>
      <Link href='/forth'>
        <p>Go to forth</p>
      </Link>
    </div>
  )
}

export default Third