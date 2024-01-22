import { FC } from "react";
import NavBar from "../../containers/navbar/NavBar/NavBar.nav";

const Landing: FC = () => {
    return (
        <>
            <header className="w-100 h-8% bg-blue-900">
                <NavBar/>
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