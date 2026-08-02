import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website || !body.name || !body.email || !body.organisation) return NextResponse.json({ message: "Please complete the required fields." }, { status: 400 });

    const webhook = process.env.PILOT_FORM_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, submittedAt: new Date().toISOString() }) });
      if (!response.ok) throw new Error("Webhook delivery failed");
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Something went wrong. Please try again or email us directly." }, { status: 500 });
  }
}
