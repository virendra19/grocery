import Paypal from '../../assets/paypal.png'
import gp from '../../assets/gpay.png'
import pp from '../../assets/phonepay.png'
import cd from '../../assets/mastercard.png'
import item1 from "../../assets/img1.png";
import item2 from "../../assets/img2.png";

export const billingCheckOut = [
    {
        billingName: "SubTotal",
        billingPrice: "45.10",
    },
    {
        billingName: "Discount",
        billingPrice: "10.00",
    },
    {
        billingName: "Shipping",
        billingPrice: "5.10",
    },
    {
        billingName: "Tax",
        billingPrice: "5.10",
    },

]

export const radioAddress = [
    {
        userAddName: "Sean Smith",
        userAddres: `4517 Washington Ave. Manchester, Kentucky 39495`
    },
    {
        userAddName: "Sean Smith",
        userAddres: `4517 Washington Ave. Manchester, Kentucky 39495`
    },
]

export const paymentMtd = [
    {
        mtdName: `Paypal`,
        mtdImg: Paypal,
    },
    {
        mtdName: `Google Pay`,
        mtdImg: gp,
    },
    {
        mtdName: `Phone Pe`,
        mtdImg: pp,
    },
    {
        mtdName: `Credit/Dabit Card`,
        mtdImg: cd,
    },
]



export const itemsCheckout = [
    {
        itemImg: item1,
        itemsType: 'Beverages',
        itemsName: 'Nescafe Coffee',
        itemPrice: '10.00',
    },
    {
        itemImg: item2,
        itemsType: 'Beverages',
        itemsName: 'Giffy Dishwash Gel',
        itemPrice: '4.50',
    },
]