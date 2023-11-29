import React from 'react'
import { ConvexHttpClient } from 'convex/browser'
import { LoaderFunctionArgs } from '@vercel/remix'
import { useLoaderData } from '@remix-run/react'
import { api } from 'convex/_generated/api'
import { json } from '@vercel/remix'


export const loader = async ({ request }: LoaderFunctionArgs) => {
  
  const convex = new ConvexHttpClient(process.env.CONVEX_URL || '')
  const tasks = await convex.query(api.task.get)
  return json({ tasks })
}

const Convex = () => {
  const { tasks } = useLoaderData<any>();

  console.log(tasks)
  return (
    <div className='flex flex-col text-center w-screen h-screen justify-center items-center'>
      <h1 className='font-bold text-2xl'>Convex</h1>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>

  )
}

export default Convex