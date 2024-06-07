import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function POST(req) {
  const res = await req.json();

  const url = new URL(req.url);

  const { origin } = url;
  const pathUrl = origin;

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["IN", "US"],
        },
        line_items: res.map((item) => {
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${pathUrl}/success`,
        cancel_url: `${pathUrl}/cancel`,
      });
      return NextResponse.json(session, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
