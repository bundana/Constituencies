import {Link} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import { Button} from "@headlessui/react";
import { Input } from "@headlessui/react";
import {date} from "zod";

export default function AppLayout({children, logo}) {
    return <>
        <div className="flex min-h-[100dvh] flex-col">
            <header className="bg-background shadow">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <Link href="#" className="flex items-center">
                        <img src={logo}  alt={''}/>
                        {/*<span className="ml-2 text-lg font-semibold">2024 Election.</span>*/}
                    </Link>
                    <nav className="hidden space-x-4 md:flex">
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Constituencies
                        </Link>
                    </nav>
                    <Button>Login</Button>
                </div>
            </header>
            <main className="flex-1"/>
            { children }
            <footer className="bg-muted pt-8 pb-6">
                <div
                    className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:items-start">
                    <div className="flex flex-col items-center gap-4 md:items-start text-center">
                        <Link href="#" className="flex items-center text-center">
                            <ApplicationLogo className="h-6 w-6"/>
                            <span className="ml-2 text-lg font-semibold">2024 Election Strategy.</span>
                        </Link>
                        <p className="text-muted-foreground">&copy; { new Date().getFullYear() } . All rights reserved.</p>
                    </div>


                </div>
            </footer>
        </div>
    </>
}
