import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json();
  } catch (error: unknown) {
    return NextResponse.json({ error });
  }
}
