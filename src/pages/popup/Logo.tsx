import logo from "@assets/img/logo.svg";

export default function Logo() {
    return (
        <div className="flex flex-col items-center justify-center pt-5">
            <img src={logo} className="h-36 pointer-events-none animate-spin-slow" alt="logo" />
        </div>
    )
}