import { FC } from "react"
import { useFormik } from "formik"
import MintNFTSchema from "../../../form-schemas/mint-nft.schema"
import { useState } from "react"
import FormInput from "../../../components/forms-components/Input/Input.component.form"
import FormLabel from "../../../components/forms-components/Label/Label.component.form"
import FormError from "../../../components/forms-components/Error/Error.component.form"
import FormSubmitButton from "../../../components/forms-components/SubmitButton/SubmitButton.component.form"

const MintNFTForm: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFormSubmit = (values: any) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            NFT_name: '',
            NFT_description: '',
            NFT_price: '',
            NFT_image: '',
        },
        validationSchema: MintNFTSchema,
        onSubmit: handleFormSubmit,
    })

    const { touched, errors, getFieldProps, setFieldValue, handleSubmit } = formik

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-2 bg-gray-300 p-10 rounded">

            <FormLabel htmlFor="NFT_name" text="Nombre del NFT:" />
            <FormInput id="NFT_name" type="text" fieldProps={getFieldProps("NFT_name")} />
            <FormError touched={touched} errors={errors} formProp="NFT_name" />

            <FormLabel htmlFor="NFT_description" text="Descripción del NFT:" />
            <FormInput id="NFT_description" type="text" fieldProps={getFieldProps("NFT_description")} />
            <FormError touched={touched} errors={errors} formProp="NFT_description" />

            <FormLabel htmlFor="NFT_image" text="Imagen del NFT:" />
            <FormInput id="NFT_image" type="file" setFieldValue={setFieldValue} />
            <FormError touched={touched} errors={errors} formProp="NFT_image" />

            <FormSubmitButton isLoading={isLoading} loadingText="Creando NFT..." defaultText="Crear NFT" />

        </form>
    )
}

export default MintNFTForm