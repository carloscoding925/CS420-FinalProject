import { Link, useLocation } from "@remix-run/react";

export default function Sidebar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <div className="flex flex-col w-[240px] h-full bg-gray-300 space-y-4">
                <div className="flex flex-row bg-gray-400 h-[60px] place-content-center pt-3">
                    <h1 className="text-2xl font-bold text-center">
                        Components
                    </h1>
                </div>
                <div className={`hover:bg-gray-400 h-[60px] rounded place-content-center transition-transform duration-300 hover:-translate-y-2 ${currentPath === '/components/generalComponents' ? 'bg-gray-400' : ''}`}>
                    <Link to="/components/generalComponents">
                        <h1 className="text-xl font-bold text-left pl-2">
                            General Components
                        </h1>
                    </Link>
                </div>
                <div className={`hover:bg-gray-400 h-[60px] rounded place-content-center transition-transform duration-300 hover:-translate-y-2 ${currentPath === '/components/accessibleComponents' ? 'bg-gray-400' : ''}`}>
                    <Link to="/components/accessibleComponents">
                        <h1 className="text-xl font-bold text-left pl-2">
                            Accessible Components
                        </h1>
                    </Link>
                </div>
                <div className={`hover:bg-gray-400 h-[60px] rounded place-content-center transition-transform duration-300 hover:-translate-y-2 ${currentPath === '/components/favorites' ? 'bg-gray-400' : ''}`}>
                    <Link to="/components/favorites">
                        <h1 className="text-xl font-bold text-left pl-2">
                            Favorites
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}