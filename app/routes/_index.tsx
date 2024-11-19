import { Link } from "@remix-run/react";

export default function Component() {
    return (
        <div>
            <div>
                Home page index page
            </div>
            <div>
                <Link to="/folder">
                    <div className="text-red-500">
                        Folder
                    </div>
                </Link>
            </div>
        </div>
    );
}