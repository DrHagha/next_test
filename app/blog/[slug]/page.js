"use client"

export default function Page({ params }){
    return (
        <div>
            <h1>posts</h1>
            <h2>{params.slug}</h2>
        </div>
    );
}