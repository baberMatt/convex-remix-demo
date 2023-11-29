import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className='flex flex-col text-center w-screen h-screen justify-center items-center bg-indigo-100'>
      <h1 className="font-bold text-5xl">Welcome to Remix Convex Demo</h1>
    </div>
  );
}
