import "@/assets/styles/main.css"
import { NewLayout } from "./new-list"
import { useState } from "react"

export const Main = function main() {

    const [openNew, setOpenNew] = useState(false);

    
    return(
        <div className="main">
            <div className="main-left">
                <NewLayout/>
            </div>
            <div className="main-right">...</div>
        </div>
    )
}