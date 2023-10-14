import client from "@/lib/paypal";
import paypal from "@paypal/checkout-server-sdk";

export async function POST(req: Request) {
  try {
  } catch (err) {}
  const PaypalClient = client();
  const request = new paypal.orders.OrdersCreateRequest();
  request.headers["Prefer"] = "return=representation";
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "10",
        },
      },
    ],
  });

  const response = await PaypalClient.execute(request);
  if (response.statusCode !== 201) {
    console.log("RES: ", response);
    return Response.json(
      {
        success: false,
        message: "Some Error Occured at backend",
      },
      { status: 500 }
    );
  }

  return Response.json({ success: true, order: response.result });
}
