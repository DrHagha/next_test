const session = null

export default function Home(){
    if (!session) throw new Error("error")

    return (
        <h1>hello world</h1>
    );
}