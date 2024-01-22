import { FC, useState } from "react";
import { useFormik } from "formik";
import APICall from "../../backend/axiosInstance";
import { USER_ROUTES } from "../../backend/routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { editUserInfo, UserEdit } from "../../redux/slices/userSlice";
import EditUserSchema from "../../schemas/edit-user.schema";

interface EditUserFormProps {
  userId: string;
  onSave: () => void;
}

const EditUserForm: FC<EditUserFormProps> = ({ userId, onSave }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: UserEdit) => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("profilePhoto", values.profilePhoto);

    try {
      setIsLoading(true);
      const response = await APICall.patch(
        USER_ROUTES.editUser(userId),
        formData,
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
    onSubmit: handleSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" space-y-4 mt-2 bg-gray-300 p-10 rounded"
    >
      <label
        htmlFor="username"
        className="block mb-2 text-lg font-medium text-gray-900"
      >
        Nombre de usuario:
      </label>
      <input
        id="username"
        type="text"
        {...formik.getFieldProps("username")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}

      <label
        className="block mb-2 text-lg font-medium text-gray-900"
        htmlFor="profilePhoto"
      >
        Foto de perfil:
      </label>
      <input
        id="profilePhoto"
        type="file"
        onChange={(event) =>
          formik.setFieldValue("profilePhoto", event.target.files![0])
        }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
        <div>{formik.errors.profilePhoto}</div>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className={`text-gray-100 bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
          isLoading ? "cursor-progress" : "hover:cursor-pointer"
        }`}
      >
        {isLoading ? "Guardando..." : "Guardar datos"}
      </button>
    </form>
  );
};

export default EditUserForm;
