import { FC } from "react";
import ConnectMetaMask from "../../components/ConnectMetaMask/ConnectMetaMask";

const Landing: FC<
    {
        hasProvider: boolean | null;
    }> = ({ hasProvider }) => {
        return (
            <>
            <header className="w-screen h-20 bg-blue-900">
                <nav>
                    <ul className="flex display-flex">
                        <li>
                            Inicio
                        </li>
                        <li>
                            Sobre Nosotros
                        </li>
                    </ul>
                </nav>
            </header>

            <footer>

            </footer>
                <ConnectMetaMask hasProvider={hasProvider} />
            </>
        )
    }

export default Landing