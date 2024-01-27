import { FC } from "react";

interface FormLabelProps {
    htmlFor: string;
    text: string;
}

const FormLabel: FC<FormLabelProps> = ({ htmlFor, text }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="block mb-2 text-lg font-medium text-gray-900"
        >
            {text}
        </label>
    )
}

export default FormLabel