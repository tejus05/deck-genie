import React from 'react'
import { redirect } from 'next/navigation'

type Props = {
}

const Page = (props: Props) => {
    redirect('/dashboard')
  return (
    <div>Page</div>
  )
}

export default Page