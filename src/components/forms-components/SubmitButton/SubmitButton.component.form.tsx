import { FC } from "react";

interface FormSubmitButtonProps {
    isLoading: boolean;
    loadingText: string;
    defaultText: string;
}

const FormSubmitButton: FC<FormSubmitButtonProps> = ({ isLoading, loadingText, defaultText }) => {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`text-gray-100 bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${isLoading ? "cursor-progress" : "hover:cursor-pointer"
                }`}
        >
            {isLoading ? loadingText : defaultText}
        </button>
    )
}

export default FormSubmitButton