import { FC } from "react";
import ConnectMetaMask from "../../components/ConnectMetaMask/ConnectMetaMask";

const Landing: FC<
    {
        hasProvider: boolean | null;
    }> = ({ hasProvider }) => {
        return (
            <>
                <ConnectMetaMask hasProvider={hasProvider} />
            </>
        )
    }

export default Landing