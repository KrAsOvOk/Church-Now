// filepath: src/app/api/your-endpoint/route.ts
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  const client = await clientPromise;
  const db = client.db("your-db-name");
  const data = await db.collection("your-collection").find({}).toArray();
  return new Response(JSON.stringify(data), { status: 200 });
}