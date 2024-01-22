import { FC } from "react";
import ConnectMetaMask from "../../components/ConnectMetaMask/ConnectMetaMask";
import NavItem from "../../components/NavItem/NavItem";

const Landing: FC<
    {
        hasProvider: boolean | null;
    }> = ({ hasProvider }) => {
        return (
            <>
                <header className="w-100 h-8% bg-blue-900">
                    <nav className="w-100 h-full flex text-white">
                        <ul className="flex w-3/5 h-full items-center space-x-5 pl-4">
                            <NavItem label='Inicio' />
                            <NavItem label='Sobre Nosotros' />
                            <NavItem label='NFT' />
                            <NavItem label='Beneficios' />
                            <NavItem label='Preguntas Frecuentes' />
                        </ul>
                        <ConnectMetaMask hasProvider={hasProvider} />
                    </nav>
                </header>


                <section className="h-72% bg-green-900 text-center flex items-center justify-center">
                    Sección 1
                </section>
                <section className="h-72% bg-yellow-500 text-center flex items-center justify-center">
                    Sección 2
                </section>

                <footer className="w-100 h-8% bg-red-400 text-center flex items-center justify-center">
                    Footer
                </footer>

            </>
        )
    }

export default Landing