import Image from "next/image";
import Link from "next/link";
import client from "../client";
import Hero from "@/components/hero/Hero";
export default async function Home() {
  const post = await getData();
  console.log(post);
  return (
    <>
      <section className=" max-w-7xl mx-auto py-24 lg:px-10 md:px-10 px-10">
        <h1 className="text-3xl font-semibold mb-6 font-comi">
          Latest Articles
        </h1>
        <Hero />
      </section>
      <section className=" max-w-7xl mx-auto p-10 lg:px-10 md:px-10 ">
        <h2 className="text-3xl font-semibold mb-6 font-comi">
          Web Development
        </h2>
      </section>
    </>
  );
}

async function getData() {
  try {
    // we need to take the [0] from the query to bring the whole array of post
    const res = await client.fetch(
      `*[_type == "post"][0]{title, "name": author->name, "categories": categories[]->title,"slug": slug.current}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}
