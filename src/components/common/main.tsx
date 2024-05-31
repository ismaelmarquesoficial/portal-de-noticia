import "@/assets/styles/main.css"
import { NewLayout } from "./new-list";

export const Main = function main() {
    return(
        <div className="main">
            <div className="main-left">
                <NewLayout/>
            </div>
            <div className="main-right">...</div>
        </div>
    )
};