import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from  '@mui/icons-material/Storefront';
import VideoLibraryicon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';


const Sidebar = () => {
    return(
        <div className = 'sidebar'>
            <SidebarRow src="https://lite-images-i.scdn.co/image/ab67616d0000b273f2788cb7e200d513a5bc9ab6" title= 'Arielito' />
            <SidebarRow Icon={LocalHospitalIcon} title = 'COVID-19 Information center' />
            <SidebarRow Icon={EmojiFlagIcon} title = 'Pages' />
            <SidebarRow Icon={PeopleIcon} title = 'Friends' />
            <SidebarRow Icon={ChatIcon} title = 'Messenger' />
            <SidebarRow Icon={StorefrontIcon} title = 'Marketplace' />
            <SidebarRow Icon={VideoLibraryicon} title = 'Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title = 'More' />
            
        </div>
    )
};

export default Sidebar;
