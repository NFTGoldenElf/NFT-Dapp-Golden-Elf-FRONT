import { FC } from "react";

interface FormErrorProps {
    formProp: string;
    errors: any;
    touched: any;
}

const FormError: FC<FormErrorProps> = ({ formProp, errors, touched }) => {
    return (
        <>
            {
                touched[formProp] && errors[formProp] ? (
                    <div>{errors[formProp]}</div>
                ) : null
            }
        </>
    )
}

export default FormError