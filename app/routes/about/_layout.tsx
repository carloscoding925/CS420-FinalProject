// Carlos Hernandez

import { Outlet } from "@remix-run/react";

// This page only has an <Outlet />, why is that?
// The _layout page is responsible for rendering the rest of the pages within a folder.
// If we wanted to add a sidebar or header within the about page, we can do it here

export default function Component() {
    return (
        <div>
            <Outlet />
        </div>
    );
}