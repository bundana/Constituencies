import { useState } from 'react';
import { Link } from '@inertiajs/react';
import LogoPlain from '@/Assets/logo-plain.png';

export default function AppLayout({ children, logo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex min-h-[100dvh] flex-col">
            <header className="bg-background shadow">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-16">
                    <Link href={route('home')} className="flex items-center">
                        <img src={logo} alt="Logo" className="h-8 max-w-xs" />
                    </Link>
                    <nav className="hidden md:flex items-center space-x-4 text-primary-green font-extrabold bg-background">
                        <Link href={route('home')} className="text-muted-foreground hover:text-foreground py-2 px-4">
                            Map
                        </Link>
                        <Link href={route('constituencies')} className="text-muted-foreground hover:text-foreground py-2 px-4">
                            Constituencies
                        </Link>
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary-green focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-background`}>
                    <Link href={route('home')} className="block text-primary-green font-extrabold text-muted-foreground hover:text-foreground py-2 px-4">
                        Map
                    </Link>
                    <Link href={route('constituencies')} className="block text-primary-green font-extrabold text-muted-foreground hover:text-foreground py-2 px-4">
                        Constituencies
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <footer className="bg-muted pt-8 pb-6 w-full">
                <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Link href="#" className="flex items-center text-center">
                            <img src={LogoPlain} alt="ndc logo" className="h-6 w-6" />
                            <span className="ml-2 text-lg font-semibold">2024 Election Strategy</span>
                        </Link>
                        <p className="text-muted-foreground">
                            &copy; {new Date().getFullYear()} . All rights reserved. Developed by <a href="https://sirateqghana.com">Sirateq Ghana</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
