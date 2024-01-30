import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{

    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando o Mercado Pago, utilizando os metodos e padrões do PayPal")
    }

    authToken(): Token {
        this.mercadoPago.authToken();
    }
    paypalPayment(): void {
        this.mercadoPago.sendPayment();
    }
    paypalRecive(): void {
        this.mercadoPago.recivePayment();
    }

}