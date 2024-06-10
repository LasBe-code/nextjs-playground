import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ method: "RESPONSE FROM GET" }, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ method: "RESPONSE FROM POST" }, { status: 200 });
}
