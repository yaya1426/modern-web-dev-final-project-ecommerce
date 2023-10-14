"use client";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useTranslations } from "next-intl";

function createOrder() {
  // replace this url with your server
  return fetch("paypal/createOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // use the "body" param to optionally pass additional order information
    // like product ids and quantities
    //   body: JSON.stringify({
    //     cart: [
    //       {
    //         sku: "1blwyeo8",
    //         quantity: 2,
    //       },
    //     ],
    //   }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Your code here after create the order
      console.log(data)
      return data.order.id;
    });
}
function onApprove(data: any) {
  // replace this url with your server
  return fetch(
    "paypal/captureOrder",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: data,
      }),
    }
  )
    .then((response) => response.json())
    .then((orderData) => {
      // Your code here after capture the order
    });
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }: any) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        disabled={false}
        fundingSource={undefined}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
};

export default function Page() {
  const t = useTranslations("Categories");

  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{ clientId: "test", components: "buttons", currency: "USD" }}
      >
        <ButtonWrapper showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}
