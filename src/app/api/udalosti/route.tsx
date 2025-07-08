import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("AllData");
  const udalosti = await db.collection("udalosti").find({}).toArray();
  return new Response(JSON.stringify(udalosti), { status: 200 });
}

export async function POST(request: Request) {
  const client = await clientPromise;
  const db = client.db("AllData");
  const data = await request.json();
  const result = await db.collection("udalosti").insertOne(data);
  return new Response(JSON.stringify(result), { status: 201 });
}

export async function DELETE(request: Request) {
  const client = await clientPromise;
  const db = client.db("AllData");
  const { _id } = await request.json();
  //const { ObjectId } = require("mongodb");
  
  const result = await db.collection("udalosti").deleteOne({ _id: new ObjectId(_id) });
  return new Response(JSON.stringify(result), { status: 200 });
}

