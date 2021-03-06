import "./SidebarHeader.css";
import Logo from '../../Components/Logo/Logo';
import Searchbar from '../../Components/Searchbar';
import SidebarToggle from "./SidebarToggle";
const SidebarHeader = (props) => {
    return (
        <div className="sidebar__header">
            <SidebarToggle />
            <Logo />
        </div>
    )
}

export default SidebarHeader;