import React, { useState } from 'react'; // importing FunctionComponent
import './SideBar.css'

type MenuConfig = {
    title: string,
    subItems?: Array<string>,
}

const menuConfig: MenuConfig[] = [
    {
        title: "Home"
    },
    {
        title: "Services",
        subItems: ["Cooking", "Cleaning"]
    },
    {
        title: "Contact",
        subItems: ["Phone", "Mail"]
    }
];



export const SideBar = () => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const handleSubMenuClick = (title: string) => {
        setOpenSubMenu((prev) => (prev === title ? null : title));
    }

    return (
        <div>
            <h1>Menu</h1>
            <div className="menu">
                {menuConfig.map((menuItem, index) => (
                    <div key={index}>
                        <div
                            className="menu-item"
                        >
                            {menuItem.title}

                            {menuItem?.subItems &&
                                <button onClick={() => handleSubMenuClick(menuItem.title)}>
                                    {openSubMenu === menuItem.title ? 'Hide' : 'Expand'}
                                </button>
                            }
                        </div>
                        {openSubMenu === menuItem.title && menuItem.subItems && (
                            <div className="sub-menu">
                                {menuItem.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
} 