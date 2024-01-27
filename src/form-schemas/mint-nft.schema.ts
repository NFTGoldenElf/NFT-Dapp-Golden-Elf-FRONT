import { ObjectSchema, object, string, mixed } from "yup";

type MintNFTProps = {
    name: string;
    description: string;
    image: any;
}

const MintNFTSchema: ObjectSchema<MintNFTProps> = object({
    name: string()
        .max(100, "El nombre del NFT no puede ser tan extenso.")
        .required('Campo requerido.'),
    description: string()
        .max(500, 'La descripción del NFT no puede superar los 1000 carácteres')
        .required('Campo requerido.'),
    image: mixed()
        .test('FILE_FORMAT', 'Formato de archivo no válido. Solo se acepta .jpg, .jpeg o .png', (value: any) => {
            if (!value) {
                return false;
            }
            const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
            return allowedFormats.includes(value.type);
        })
        .required("Debe subir una foto del NFT.")
})

export default MintNFTSchema