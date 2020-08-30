import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}  title={user.displayName} />
            <SidebarRow url="https://covid-tracker-react-f23bb.web.app/" src="" Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow src="" Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow src="" Icon={PeopleIcon} title="Friends" />
            <SidebarRow src="" Icon={ChatIcon} title="Messenger" />

            <SidebarRow src="" Icon={StorefrontIcon} title="MarketPlace" />
            <SidebarRow src="" Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow src="" Icon={ExpandMoreIcon} title="See more" />
        </div>
    )
}

export default Sidebar
