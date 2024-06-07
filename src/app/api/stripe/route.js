import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getSession } from "@auth0/nextjs-auth0";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function POST(req) {
  const res = await req.json();

  const url = new URL(req.url);

  const { origin } = url;
  const pathUrl = origin;

  const { user } = await getSession();
  console.log(user);

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        customer_email: user.email,
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["IN", "US"],
        },
        allow_promotion_codes: true,
        shipping_options: [
          { shipping_rate: "shr_1POxszSIaPqg07jYkNpCLw8K" },
          { shipping_rate: "shr_1POy1jSIaPqg07jYSCMj2qMJ" },
        ],
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
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${pathUrl}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${pathUrl}/cancel`,
      });
      return NextResponse.json(session, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
