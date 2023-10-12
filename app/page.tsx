import Image from 'next/image'
import Link from 'next/link'
import client from '../client'
export default async function Home() {
  const post = await getData()
  console.log(post)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1>{post.title}</h1>
      <p>{post.name}</p>
    </main>
  )
}

async function getData() {
  try{
    const res = await client.fetch(`*[_type == "post"][0]{title, "name": author->name, "categories": categories[]->title,"slug": slug.current}`)
    return res
  }catch (err){
    console.log(err)
  }

}