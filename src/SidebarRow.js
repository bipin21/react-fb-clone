import React from 'react'
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({url, src, Icon, title, }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <a href={url && url}>{title}</a>
        </div>
    )
}

export default SidebarRow
