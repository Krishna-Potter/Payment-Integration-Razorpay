import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState("");

  const fetchPaymentInfo = async (pay_id = "") => {
    let url = `https://api.razorpay.com/v1/payments/${pay_id}`;
    let res = await axios.get(url);
    console.log(res);
  };
  const paymentStatus = (e) => {
    // 9600657997@ybl
    var options = {
      key: "rzp_test_lDC3hlE2Nykh3Z", // Enter the Key ID generated from the Dashboard
      amount: "10", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Shivamfarms Test",
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      handler: (res) => {
        console.log(res);
        let { razorpay_payment_id: payId = "" } = res;
        if (payId) {
          fetchPaymentInfo(payId);
        }
      },
      prefill: {
        name: "Krishna Kumar K",
        email: "krishna.vebbox@gmail.com",
        contact: "9600657997",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const pay = new window.Razorpay(options);
    pay.open();
    // e.preventDefault();
  };

  return (
    <div className="App">
      <h2>Razorpay Payment Gateway</h2>
      <input
        type="number"
        placeholder="Enter a amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      {/* <button onClick={(e) => paymentStatus(e)}>Buy Now</button> */}
    </div>
  );
}

export default App;
