import { FC } from "react"
import { useFormik } from "formik"
import MintNFTSchema from "../../../form-schemas/mint-nft.schema"
import { useState } from "react"
import FormInput from "../../../components/forms-components/Input/Input.component.form"
import FormLabel from "../../../components/forms-components/Label/Label.component.form"
import FormError from "../../../components/forms-components/Error/Error.component.form"
import FormSubmitButton from "../../../components/forms-components/SubmitButton/SubmitButton.component.form"
import APICall from "../../../backend/axiosInstance"
import { NFT_ROUTES } from "../../../backend/routes"
import { mint } from "../../../utils/utils"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

interface MintNFTFormProps {
    onSave: () => void
}

const MintNFTForm: FC<MintNFTFormProps> = ({ onSave }) => {
    const { accounts } = useSelector((state: RootState) => state.wallet)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleFormSubmit = async (values: any) => {
        try {
            setIsLoading(true);
            const response = await APICall.post(NFT_ROUTES.createNFT, values,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            const uri = response.data;
            await mint(uri).send({ from: accounts[0] });
            onSave()
        }
        catch (error: any) {
            console.error(error)
            setIsLoading(false);
        }
        finally {
            setIsLoading(false);
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image: '',
        },
        validationSchema: MintNFTSchema,
        onSubmit: handleFormSubmit,
    })

    const { touched, errors, getFieldProps, setFieldValue, handleSubmit } = formik

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-2 bg-gray-300 p-10 rounded">

            <FormLabel htmlFor="name" text="Nombre del NFT:" />
            <FormInput id="name" type="text" fieldProps={getFieldProps("name")} />
            <FormError touched={touched} errors={errors} formProp="name" />

            <FormLabel htmlFor="description" text="Descripción del NFT:" />
            <FormInput id="description" type="text" fieldProps={getFieldProps("description")} />
            <FormError touched={touched} errors={errors} formProp="description" />

            <FormLabel htmlFor="image" text="Imagen del NFT:" />
            <FormInput id="image" type="file" setFieldValue={setFieldValue} />
            <FormError touched={touched} errors={errors} formProp="image" />

            <FormSubmitButton isLoading={isLoading} loadingText="Creando NFT..." defaultText="Crear NFT" />

        </form>
    )
}

export default MintNFTForm