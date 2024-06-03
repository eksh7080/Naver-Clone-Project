import { NextRequest, NextResponse } from "next/server";
import SubNavList from "@db/SubNavList.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(SubNavList);
  } catch (error: unknown) {
    return NextResponse.json({ error });
  }
}
