import clientPromise from "@/lib/monogodb";
export async function POST(request) {
    if (!request.body) {
        return Response.json({ success: false, error: true, message: 'No data provided' });
    }
    
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    const result = await collection.insertOne(body)
    console.log(body);
    return Response.json({ success: true, error: false, result, message: 'Your Link Tree has been generated.' })
}