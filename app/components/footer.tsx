export default function Footer() {
    return (
        <div className="">
            <footer className="flex flex-row bg-blue-400 h-[80px] text-white">
                <div className="flex flex-row justify-left space-x-16 w-full pb-2 pl-4">
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold font-serif">
                            WDAT
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold font-serif">
                            © 2024 Web Developer Accessibility Tool
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row justify-end w-full pb-2 pr-2">
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold font-serif">
                            Made by: Carlos Hernandez
                        </h1>
                    </div>
                </div>
            </footer>
        </div>
    )
}
