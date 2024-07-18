import { Separator } from "./ui/separator";

const dataFooter = [{
    id: 1,
    title: "Sobre Nosotros",
    link: "/",
},
{
    id: 2,
    title: "Productos",
    link: "/",
},
{
    id: 3,
    title: "Mis Cuentas",
    link: "/",
},
{
    id: 4,
    title: "Ayuda",
    link: "/",
}
]
const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        <span className="font-bold">
                            Sergio
                        </span>
                        E-commerce
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="me-4 hover:underline md:mr-4 ">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <Separator className="my-6" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024</span>
            </div>
        </footer>

    );
}

export default Footer;