export default async function Page({ params }) {
    const { handle } = await params
    return <div className="flex min-h-screen bg-purple-400 items-center justify-center">
        <div></div>
    </div>
}