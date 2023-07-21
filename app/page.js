import Link from "next/link";

export const metadate = {
    title : `Next.js`,
}

export default function Page(){
    return (
        <>
            <h1>hello world</h1>
            <Link href="/dashboard">Dashboard</Link>
        </>
    );
}