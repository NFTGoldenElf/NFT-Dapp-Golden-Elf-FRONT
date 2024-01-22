import { FC } from "react";
import ConnectMetaMask from "../../components/ConnectMetaMask/ConnectMetaMask";

const Landing: FC<
    {
        hasProvider: boolean | null;
    }> = ({ hasProvider }) => {
        return (
            <>
            <header>
                <nav>
                </nav>
            </header>

            <footer>

            </footer>
                <ConnectMetaMask hasProvider={hasProvider} />
            </>
        )
    }

export default Landing