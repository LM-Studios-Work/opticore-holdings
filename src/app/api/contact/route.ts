import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  // TODO: Wire up to an email/CRM provider (e.g. Resend, SendGrid, SMTP)
  // once credentials for info@opticoreholdings.co.za are available.
  console.log("New contact message:", data);

  return NextResponse.json({ success: true });
}
