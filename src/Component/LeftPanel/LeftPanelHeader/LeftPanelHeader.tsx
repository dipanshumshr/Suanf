import "./LeftPanelHeader.css"
import JiraLogo from "../../../assets/jira.png";

function LeftPanelHeader() {
    return (
        <div className="LeftPanelHeader">
            <div className="header-left">
                <button className="comfy_alt">
                    <span className="material-symbols-outlined">
                        view_comfy_alt
                    </span>
                </button>

                <button className="jira-icon">
                    <img src={JiraLogo} alt="Jira-icon"/>
                    Jira
                </button>
            </div>

            <div className="header-right">
                <button className="panel_close">
                    <span className="material-symbols-outlined">
                        left_panel_close
                    </span>
                </button>
            </div>
        </div>
    )
}

export default LeftPanelHeader