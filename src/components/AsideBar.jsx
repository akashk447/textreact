import React, { useState } from 'react'
import { sidebarMenu } from '../data/sidebarMenu';

const AsideBar = ({ showSideBar }) => {
    const [tabProduct, settabProduct] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (
        <div>
            <div id="sidebar" className="sidebar-fixed" style={{ display: showSideBar ? "block" : "none" }}>
                <div id="sidebar-content">
                    <ul id="nav">
                        {sidebarMenu.map((item, index) => {
                            return (

                                <li key={index} className={index === selectedIndex ? "current" : ""}>
                                    <a href="javascript:void(0);" onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}>
                                        <i className={item.icon} />
                                        {item.title}
                                        {item.children && (
                                            <i class={index === selectedIndex ? "arrow icon-angle-down" : "arrow icon-angle-right"}></i>
                                        )}
                                    </a>
                                    {item.children && (
                                        <ul className="sub-menu" style={{ display: index === selectedIndex ? "block" : "none" }}>
                                            {item.children.map((childItem, childIndex) => {
                                                return (
                                                    <li key={`${index}-${childIndex}`}>
                                                        <a href="#!">
                                                            <i className="icon-angle-right" /> {childItem.title}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                        {/* <li className=''> <a href="index.html"> <i className="icon-dashboard" /> Dashboard </a> </li> */}


                    </ul>
                    {/* <div className="sidebar-widget align-center">
                        <div className="btn-group" data-toggle="buttons" id="theme-switcher"> <label className="btn active"> <input type="radio" name="theme-switcher" data-theme="bright" /><i className="icon-sun" /> Bright
                        </label> <label className="btn"> <input type="radio" name="theme-switcher" data-theme="dark" /><i className="icon-moon" /> Dark </label> </div>
                    </div> */}
                </div>
                <div id="divider" className="resizeable" />
            </div>

        </div>
    )
}

export default AsideBar
