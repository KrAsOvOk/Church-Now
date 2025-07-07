// filepath: src/app/api/test-mongo/route.ts
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // Uses the default DB from your URI
    // List collections as a simple test
    const collections = await db.listCollections().toArray();
    return new Response(JSON.stringify({ success: true, collections }), { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}