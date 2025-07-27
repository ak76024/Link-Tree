import { NextResponse } from 'next/server';
import clientPromise from "@/lib/monogodb";  // fix typo here

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json({ success: false, error: true, message: 'Invalid JSON' }, { status: 400 });
  }

  if (!body) {
    return NextResponse.json({ success: false, error: true, message: 'No data provided' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    const result = await collection.insertOne(body);
    console.log(body);
    return NextResponse.json({ success: true, error: false, result, message: 'Your Link Tree has been generated.' });
  } catch (error) {
    console.error('MongoDB insert error:', error);
    return NextResponse.json({ success: false, error: true, message: 'Database error' }, { status: 500 });
  }
}
