import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';

export default function Guest({children}) {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
                    <a className="flex items-center justify-center" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                        </svg>
                        <span className="sr-only">Acme Inc</span>
                    </a>
                    <nav
                        aria-label="Main"
                        data-orientation="horizontal"
                        dir="ltr"
                        className="relative z-10 flex max-w-max flex-1 items-center justify-center ml-auto"
                    >
                        { children}
                        <div style={{position: "relative"}}>
                            <ul
                                data-orientation="horizontal"
                                className="group flex flex-1 list-none items-center justify-center space-x-1"
                                dir="ltr"
                            >
                                <li>
                                    <button
                                        id="radix-:r0:-trigger-radix-:r1:"
                                        data-state="closed"
                                        aria-expanded="false"
                                        aria-controls="radix-:r0:-content-radix-:r1:"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                                        data-radix-collection-item=""
                                    >
                <span
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  About
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:-rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
                                        <svg
                                            width={15}
                                            height={15}
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                                        >
                                            <path
                                                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="absolute left-0 top-full flex justify-center"/>
                    </nav>
                </header>
            </div>
        </>

    );
}
