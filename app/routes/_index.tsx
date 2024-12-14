export default function Component() {
    return (
        <div>
            <div className="flex flex-row place-content-center pt-4">
                <h1 className="text-4xl font-bold">
                    Welcome to the Web Developer Accessibility Tool!
                </h1>
            </div>
            <div className="flex flex-row place-content-center pt-4">
                <video width="900" controls loop autoPlay muted>
                    <source src="/demonstration.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}