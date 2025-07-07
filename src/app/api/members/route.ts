import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("AllData"); // Use your database name
  const members = await db.collection("Events").find({}).toArray();
  return new Response(JSON.stringify(members), { status: 200 });
}