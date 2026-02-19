import RightSide from "../RightSide/RightSide";
import Search from "../Search/Search";
import "./TopPanel.css"

function TopPanel() {

    return <div className="Top">
        <Search/>
        <RightSide/>
    </div>
}

export default TopPanel;