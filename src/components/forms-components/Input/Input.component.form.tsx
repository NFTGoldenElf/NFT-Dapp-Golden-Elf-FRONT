import { FC } from "react";

interface FormInputProps {
    id: string;
    type: string;
    fieldProps?: any;
    setFieldValue?: any;
}

const FormInput: FC<FormInputProps> = ({ id, type, fieldProps, setFieldValue }) => {
    if (type === 'text') {
        return (
            <input
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type={type}
                {...fieldProps}
            />
        )
    }
    if (type === 'file') {
        return (
            <input
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type={type}
                onChange={(event) => {
                    setFieldValue(id, event.target.files![0])
                }}
            />
        )
    }
}

export default FormInput