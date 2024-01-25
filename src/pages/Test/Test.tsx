import ButtonLanding from "../../components/svg/ButtonLanding/ButtonLanding";
import GoldenElfLogo from "../../components/svg/GoldenElfLogo/GoldenElfLogo";
import MetaMaskLogo from "../../components/svg/MetaMaskLogo/MetaMaskLogo";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import GoldenElfHeader from "../../components/svg/GoldenElfHeader/GoldenElfHeader";

export default function Test() {
    return (
        <>
            <div className="bg-black text-white">
                <h1 className="font-bold text-2xl">SVGS EN LA CARPETA SVG</h1>
                <p>Puedes importar los componentes y pasarle la propiedad "style" para escribir lo de Tailwind</p>
                <br></br><br></br><br></br>

                <p>Revisa la page Test en la carpeta "pages"</p>
                <h1 className="font-bold text-2xl">MetaMaskLogo</h1>
                <br></br>
                <MetaMaskLogo style='w-20' />

                <br></br><br></br><br></br>
                <h1 className="font-bold text-2xl">GoldenElfLogo</h1>
                <p>Este tiene un tamaño personalizado, es "w-GoldenElfLogo", está en el tailwind.config.js</p>
                <br></br>
                <GoldenElfLogo style="w-GoldenElfLogo" />

                <br></br><br></br><br></br>
                <h1 className="font-bold text-2xl">ButtonLanding</h1>
                <br></br>
                <ButtonLanding style="w-44 cursor-pointer hover:shadow-md hover:backdrop-brightness-50 transition duration-300 ease-in-out" />

                <br></br><br></br><br></br>
                <h1 className="font-bold text-2xl">Landing Icons</h1>
                <p>Estos íconos vienen de MUI Icons. Extrae la propiedad style de la page Test, ya tienen puesto el hover, todos los íconos están dentros de otra etiqueta que es un article</p>
                <br></br>
                <p>import InstagramIcon from '@mui/icons-material/Instagram';</p>
                {/*ESTO ES UN ARTICLE, LLEVATELO ENTERO, EL ARTICLE ES EL QUE TIENE EL HOVER*/}

                <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                    <InstagramIcon sx={{
                        fontSize: 40,
                        color: '#ffffff'
                    }} />
                </article>

                <br></br>

                <p>import FacebookIcon from '@mui/icons-material/Facebook';</p>
                <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                    <FacebookIcon sx={{
                        fontSize: 40,
                        color: '#ffffff'
                    }} />
                </article>

                <br></br>

                <p>import XIcon from '@mui/icons-material/X';</p>

                <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                    <XIcon sx={{
                        fontSize: 40,
                        color: '#ffffff'
                    }} />
                </article>

                <br></br>

                <p>Este no viene de MUI ya que no está, el código es ligeramente distinto, pero sigue estando dentro de un article, solo copia y pega</p>
                <p>Requiere dos importaciones:</p>
                <p>{`import {FaDiscord} from "react-icons/fa";`}</p>
                <p>{`import {IconContext} from "react-icons/lib"`};</p>

                <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                    <IconContext.Provider value={{ color: '#ffffff', size: '40px' }}>
                        <FaDiscord />
                    </IconContext.Provider>
                </article>

                <br></br><br></br><br></br>

                <h1 className="font-bold text-2xl">GoldenElfHeader</h1>
                <br></br>
                <GoldenElfHeader style='w-80'/>
            </div>


        </>
    )
}