import { number, ObjectSchema, object } from "yup";

type SellNFTProps = {
    price: any;
}

const SellNFTSchema: ObjectSchema<SellNFTProps> = object({
    price: number()
        .positive("El número debe ser mayor a cero.")
        .required("Debe proporcionar un precio de venta.")
})

export default SellNFTSchema