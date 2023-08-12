import { CircleLoader } from "react-spinners";
function Loader() {
    return (
        <main className="text-9xl bg-[#0f1724] flex w-screen h-screen justify-center items-center">
            <CircleLoader color="#ffffff" />
        </main>
    );
}

export default Loader;