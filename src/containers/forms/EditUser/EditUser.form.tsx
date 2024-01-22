import { FC, useState } from "react";
import { useFormik } from "formik";
import APICall from "../../../backend/axiosInstance";
import { USER_ROUTES } from "../../../backend/routes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { editUserInfo, UserEdit } from "../../../redux/slices/userSlice";
import EditUserSchema from "../../../form-schemas/edit-user.schema";
import { RootState } from "../../../redux/store";
import FormLabel from "../../../components/forms-components/Label/Label.component.form";
import FormInput from "../../../components/forms-components/Input/Input.component.form";
import FormError from "../../../components/forms-components/Error/Error.component.form";
import FormSubmitButton from "../../../components/forms-components/SubmitButton/SubmitButton.component.form";

interface EditUserFormProps {
  onSave: () => void;
}

const EditUserForm: FC<EditUserFormProps> = ({ onSave }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useSelector((state: RootState) => state.user)

  const handleFormSubmit = async (values: UserEdit) => {
    try {
      setIsLoading(true);
      const response = await APICall.patch(
        USER_ROUTES.editUser(_id),
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(editUserInfo(response.data));
      onSave();
    } catch (error: any) {
      console.error("Error while editing user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      profilePhoto: "",
    },
    validationSchema: EditUserSchema,
    onSubmit: handleFormSubmit,
  });

  const { handleSubmit, getFieldProps, touched, errors, setFieldValue } = formik;

  return (
    <form onSubmit={handleSubmit} className=" space-y-4 mt-2 bg-gray-300 p-10 rounded">

      <FormLabel htmlFor="username" text="Nombre de usuario:" />
      <FormInput type="text" id="username" fieldProps={getFieldProps("username")} />
      <FormError touched={touched} errors={errors} formProp="username" />

      <FormLabel htmlFor="profilePhoto" text="Foto de perfil: " />
      <FormInput type="file" id="profilePhoto" setFieldValue={setFieldValue} />
      <FormError touched={touched} errors={errors} formProp="profilePhoto" />

      <FormSubmitButton isLoading={isLoading} loadingText="Guardando..." defaultText="Guardar datos" />

    </form>
  );
};

export default EditUserForm;
