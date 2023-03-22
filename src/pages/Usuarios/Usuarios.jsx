import { Outlet } from "react-router-dom";

export function Usuarios() {
    return (
        <div className="usuarios">
            <h1>Usuarios</h1>
            <Outlet />
        </div>
    )
}