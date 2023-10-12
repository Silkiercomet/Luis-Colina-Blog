import client from "../../../client"
import { urlFor } from "@/utils/utils"
import {PortableText} from '@portabletext/react'
export default async function page({params} : {
    params: {id: string}
}) {
   const y = await getPost(params.id)

  if(!y){
    return <div>404 please try other option</div>
  }
  return (
    <div>ID : {params.id}
    <article>
      <h1>{y.title}</h1>
      <p>author: {y.name}</p>
      <ul>
        {y.categories.map((e:string,i:number) => <li key={i}>{e}</li>)}
      </ul>
      {y.authorImage && (
        <div>
          <img
            src={urlFor(y.authorImage)
              .width(75)
              .url()}
          />
        </div>
      )}
      <PortableText 
       value={y.body}
      />
    </article>
    </div>
  )
}

async function getPost(slug : string) {

  try{
    const res = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body
    }`, {slug})
    console.log(res)
    return res
  }catch (err){
    console.log(err)
  }
}


