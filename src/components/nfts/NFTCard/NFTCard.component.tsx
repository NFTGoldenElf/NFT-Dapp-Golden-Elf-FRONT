import { FC, useState } from "react";
import styles from './NFTCard.module.css'
import { useFormik } from "formik";
import { listNFTForSale } from "../../../utils/utils";
import FormLabel from "../../forms-components/Label/Label.component.form";
import FormError from "../../forms-components/Error/Error.component.form";
import FormInput from "../../forms-components/Input/Input.component.form";
import FormSubmitButton from "../../forms-components/SubmitButton/SubmitButton.component.form";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SellNFTSchema from "../../../form-schemas/sell-nft.schema";
import { formatAmountInWei } from "../../../utils/utils";

interface Props {
    name: string;
    description: string;
    image: string;
    tokenId: number;
    external_url: string;
}

const NFTCard: FC<Props> = ({ name, description, image, tokenId, external_url }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { accounts } = useSelector((state: RootState) => state.wallet)

    const submitForm = async (values: any) => {
        try {
            setIsLoading(true);
            const { price } = values;
            await listNFTForSale(Number(tokenId), formatAmountInWei(price)).send({ from: accounts[0]})
            setIsLoading(false);
        }
        catch(error) {
            setIsLoading(false);
            console.error(error)
        }
    }

    const formik = useFormik({
        initialValues: {
            price: '',
        },
        validationSchema: SellNFTSchema,
        onSubmit: submitForm
    })

    const { handleSubmit, getFieldProps, touched, errors } = formik;

    return (
        <article className={styles["nft-article"]}>
            <img src={image} alt={name} className={styles["nft-image"]} />
            <h1 className={styles["nft-name"]}>{name}</h1>
            <h2 className={styles["nft-id"]}>Id del token: {tokenId}</h2>
            <p className={styles["nft-description"]}>{description}</p>
            <label className={styles["nft-external-url"]}>URL externa: {external_url}</label>
            <br/>
            <form onSubmit={handleSubmit}>
                <FormLabel htmlFor="price" text="Precio de venta en Ethers:" />
                <FormInput type="text" id="price" fieldProps={getFieldProps("price")} />
                <FormError touched={touched} errors={errors} formProp="price" />
                <FormSubmitButton isLoading={isLoading} loadingText="Espere..." defaultText="Vender" />
            </form>
        </article>
    )
}

export default NFTCard