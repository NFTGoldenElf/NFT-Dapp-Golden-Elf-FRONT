import { ObjectSchema, object, string, mixed } from "yup";

type UserEditSchema = {
    username: string;
    profilePhoto: any
}

const EditUserSchema: ObjectSchema<UserEditSchema> = object({
    username: string()
        .max(25, "El nombre de usuario puede contener hasta un máximo de 25 carácteres.")
        .required("Campo requerido."),
    profilePhoto: mixed()
        .test('FILE_FORMAT', 'Formato de archivo no válido. Solo se acepta .jpg, .jpeg o .png', (value: any) => {
            if (!value) {
                return false;
            }
            const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
            return allowedFormats.includes(value.type);
        })
        .test('FILE_SIZE', 'El tamaño del archivo no debe superar 2.5 MB', (value: any) => {
            if (!value) {
                return false;
            }
            const maxSize = 2.5 * 1024 * 1024;
            return value.size <= maxSize;
        })
        .required("Debe subir una foto de perfil.")
})

export default EditUserSchema