// Carlos Hernandez

import { Outlet } from "@remix-run/react";

// Layout page for all pages within the components folder
export default function Component() {
    return (
        <div>
            <Outlet />
        </div>
    )
}