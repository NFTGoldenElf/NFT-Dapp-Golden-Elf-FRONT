import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useFormik } from "formik";
import APICall from "../../backend/axiosInstance";
import { USER_ROUTES } from "../../backend/routes";
import { editUserInfo, UserEdit } from "../../redux/slices/userSlice";
import EditUserSchema from "../../schemas/edit-user.schema";


const Profile: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errorAPI, setErrorAPI] = useState<string>("");

    const wallet = useSelector((state: RootState) => state.wallet);
    const user = useSelector((state: RootState) => state.user);


    const handleSubmit = async (values: UserEdit) => {
        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("profilePhoto", values.profilePhoto);
        try {
            setErrorAPI("");
            setIsSubmitting(true)
            const response = await APICall.patch(USER_ROUTES.editUser(user._id), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            dispatch(editUserInfo(response.data))
            setIsSubmitting(false)
        }
        catch (error: any) {
            setIsSubmitting(false)
            setErrorAPI(error.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            username: user.username,
            profilePhoto: "",
        },
        validationSchema: EditUserSchema,
        onSubmit: handleSubmit
    })

    return (
        <>
            <img src={user.profilePhoto} width={"180px"} />
            <div>
                Nombre de usuario: {user.username}
            </div>
            <div>
                Dirección de la cuenta: {wallet.accounts[0]}
            </div>
            <div>
                Balance de la cuenta: {wallet.balance}
            </div>
            <div>
                Cadena: {wallet.chainId}
            </div>

            <div>
                <h1>EDITAR USUARIO</h1>
            </div>

            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    id="username"
                    type="text"
                    {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div>
                        {formik.errors.username}
                    </div>
                ) : null}

                <label htmlFor="profilePhoto">Foto de perfil:</label>
                <input
                    id="profilePhoto"
                    type="file"
                    onChange={(event) => formik.setFieldValue("profilePhoto", event.target!.files![0])}
                />
                {formik.touched.profilePhoto && formik.errors.profilePhoto ? (
                    <div>
                        {formik.errors.profilePhoto}
                    </div>
                ) : null}

                <button type="submit" disabled={isSubmitting}>Editar usuario</button>

                {errorAPI.length > 0 && (
                    <h2>{errorAPI}</h2>
                )}

            </form>
        </>
    )
}

export default Profile;