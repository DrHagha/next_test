export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}

export async function generateStaticParams(){
    console.log("hello world")
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post) => ({
        slug : post.slug
    }))
}