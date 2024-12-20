// Carlos Hernandez

import { Link } from "@remix-run/react";

// The header for the website, shown on every page
export default function Header() {
    return(
        <div>
            <header className="flex flex-row bg-blue-500 h-[130px] text-white">
                <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-4xl font-bold font-serif pb-2 pl-2">
                            Web Developer Accessibility Tool
                        </h1>
                    </div>
                </div>
                {/* This is the navigation bar, it has links to the home & about page */}
                <div className="flex flex-row justify-end w-full space-x-10">
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold transition-transform duration-300 hover:-translate-y-2">
                            <Link to="/">
                                Home
                            </Link>
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold transition-transform duration-300 hover:-translate-y-2 pr-4">
                            <Link to="/about">
                                About
                            </Link>
                        </h1>
                    </div>
                </div>
            </header>
        </div>
    );
}
