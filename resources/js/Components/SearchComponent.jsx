export default function SearchComponent() {
    return <>
        <header
            className="sticky top-6 z-30 flex h-14 items-center gap-4  mt-6
            border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <nav aria-label="breadcrumb" className="hidden md:flex">
                <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
                    <li className="inline-flex items-center gap-1.5"/>
                    <li
                        aria-hidden="true"
                        className="[&>svg]:size-3.5"
                        role="presentation"
                    >
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
                            className="lucide lucide-chevron-right"
                        >
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </li>
                    <li className="inline-flex items-center gap-1.5">
            <span
                aria-current="page"
                aria-disabled="true"
                className="font-normal text-foreground"
                role="link"
            >
              Overview
            </span>
                    </li>
                </ol>
            </nav>
            <div className="relative ml-auto flex-1 md:grow-0">
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
                    className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                >
                    <circle cx={11} cy={11} r={8}/>
                    <path d="m21 21-4.3-4.3"/>
                </svg>
                <input
                    className="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    type="search"
                    placeholder="Search..."
                />
            </div>
        </header>
    </>
}
