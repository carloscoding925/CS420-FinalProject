// Carlos Hernandez

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

// This is the root component for the app
export default function Component() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <ScrollRestoration />
        <Scripts />
        {/* The Header, Sidebar, and Footer components are always displayed, regardless of where we are in the website */}
        <div className="shrink-0">
          <Header />
        </div>
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
        <div className="shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}

// If the user encounters an error, display a 404 page
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body> 
        <Scripts />
        <div className="w-full flex flex-row justify-center items-center">
          <div className="font-bold text-2xl text-red-500">
            <div>
              Error 404
            </div>
            <div>
              Page Not Found
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}