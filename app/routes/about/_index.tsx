export default function Component() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-2 pb-2">
                <div className="w-[1000px] h-[600px] border border-gray-400 rounded-2xl flex items-start justify-center">
                    <div className="text-center">
                        <h1 className="font-bold text-4xl pt-6">
                            About
                        </h1>
                        <p className="pt-6 pl-6 pr-6">
                            Welcome to the Web Developer Accessibility Tool! This tool is designed to help developers create accessible websites. This tool 
                            will provide you with a list of accessible components that you can use in your projects. Within the website, you will be able to
                            view how a component works and how its interacted with along with being able to copy the code into your own projects. 
                            You can also save your favorite components to access them later. Thank you for using the Web Developer Accessibility Tool!
                        </p>
                        <div className="pt-4 flex flex-row place-content-center">
                            <div className="flex flex-row h-[300px] w-[500px] bg-cover bg-center" style={{ backgroundImage: `url('/favicon.ico')` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}