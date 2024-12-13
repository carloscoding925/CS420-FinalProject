import { Link } from "@remix-run/react";

export default function Sidebar() {
    return (
        <div>
            <div className="flex flex-col w-[240px] h-full bg-gray-300 space-y-8">
                <div className="flex flex-row bg-gray-400 h-[60px] place-content-center pt-3">
                    <h1 className="text-2xl font-bold text-center">
                        Components
                    </h1>
                </div>
                <div className="">
                    <Link to="/components/generalComponents">
                        <h1 className="text-xl font-bold text-left pl-2 transition-transform duration-300 hover:-translate-y-2">
                            General Components
                        </h1>
                    </Link>
                </div>
                <div className="">
                    <Link to="/components/accessibleComponents">
                        <h1 className="text-xl font-bold text-left pl-2 transition-transform duration-300 hover:-translate-y-2">
                            Accessible Components
                        </h1>
                    </Link>
                </div>
                <div className="">
                    <Link to="/components/favorites">
                        <h1 className="text-xl font-bold text-left pl-2 transition-transform duration-300 hover:-translate-y-2">
                            Favorites
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}