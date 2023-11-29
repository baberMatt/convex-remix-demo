import React from 'react'
import { ConvexHttpClient } from 'convex/browser'
import { LoaderFunctionArgs } from '@vercel/remix'
import { useLoaderData } from '@remix-run/react'
import { api } from 'convex/_generated/api'
import { json } from '@vercel/remix'


export const loader = async ({ request }: LoaderFunctionArgs) => {
  
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  if (usersResponse.ok) {
    const users = await usersResponse.json(); // Parse the JSON data
    console.log(users); // Log the parsed data
    return json({ users })
  } else {
    console.error('Failed to fetch data');
  }

}

const Remix = () => {
  const { users } = useLoaderData<any>();

  console.log(users)
  return (
    <div className='flex flex-col text-center w-screen h-screen justify-center items-center'>
      <h1 className='font-bold text-2xl'>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>

  )
}

export default Remix