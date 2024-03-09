import Link from 'next/link'
import React from 'react'

const Second = () => {
  return (
    <div>
      <h1>Second</h1>
      <Link href='/third'>
        <p>Go to third</p>
      </Link>
    </div>
  )
}

export default Second