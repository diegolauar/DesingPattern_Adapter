import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/Paypal";

const payment: IPayPalPayment = new PayPal();

payment.paypalPayment();
payment.paypalRecive();