import "./App.css";
import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    // 9600657997@ybl
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_zuGSYVPlUqAwAk",
        amount: amount * 100,
        currency: "INR",
        name: "Sivamfarms",
        description: "for testing",
        // order_id: "order_Ky1sdVPtNkTraX",
        handler: function (res) {
          alert(res.razorpay_payment_id);
          alert(res.razorpay_order_id);
          alert(res.razorpay_signature);
        },
        prefill: {
          name: "username",
          email: "username@gmail.com",
          contact: "9700657122",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
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
      <button onClick={handleSubmit}>Buy Now</button>
    </div>
  );
}

export default App;
