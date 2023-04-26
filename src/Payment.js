import React from "react";
import "./Style.css";
import "./PaymentStyle.css";
const Payment = () =>{

    return(
        <>
        <div className="payment-container">
            <h3>Select Your payment method</h3>
            <p id="disclaimer-parag-1">Select three of our plan sodkf koks odskdf posd</p>
            <button className="payment-method"><i className="	fa fa-credit-card"></i>Credit</button>
                <form>
                <label>
                  First Name
                    <input
                    name="fname"
                    id="fname"
                    type="text"
                    />
                </label>

                <label>
                  Last Name
                    <input
                    name="lname"
                    id="lname"
                    type="text"
                    />
                </label>

                <label>
                  Card Number
                    <input
                    name="lname"
                    id="lname"
                    type="number"
                    />
                </label>

                <label>
                   CVV
                    <input
                    name="lname"
                    id="lname"
                    type="number"
                    />
                </label>

                <label>
                   Month
                    <input
                    name="lname"
                    id="lname"
                    type="number"
                    />
                </label>

                <label>
                   Year
                    <input
                    name="lname"
                    id="lname"
                    type="number"
                    />
                </label>
                <p>Please be sure that Credit Card must be eligeable for use within Morocco.</p>
                <button className="confirm-payment">Confirm Payment</button>
                </form>
        </div>
        </>
    );
}

export default Payment;