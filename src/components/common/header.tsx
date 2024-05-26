import "@/assets/styles/header.css"
import { SocialMedia } from "../others/redes-sociais"
import { HoraAtual } from "../others/hora-atual";

export const Header = function header() {
    return(
        <div className="header">
            <div className="header-top">
                <div className="header-top--horario"><HoraAtual/></div>
                <div className="header-top--redeSociais"><SocialMedia/></div>
            </div>
            <div className="header-center">..</div>
            <div className="header-menu">..</div>
            <div className="header-botton">
                <div className="header-botton--banner_grid">
                    <div className="header-botton--banner_grid-1">1</div>
                    <div className="header-botton--banner_grid-2">2</div>
                    <div className="header-botton--banner_grid-3">3</div>
                </div>
            </div>
        </div>
    );
};
