import React, { useState } from 'react'

const AsideBar = ({showSideBar}) => {
    const [tabProduct, settabProduct] = useState(false);
    return (
        <div>
            <div id="sidebar" className="sidebar-fixed" style={{display:showSideBar?"block":"none"}}>
                <div id="sidebar-content">
                    <ul id="nav">
                        <li className=''> <a href="index.html"> <i className="icon-dashboard" /> Dashboard </a> </li>

                        <li className={tabProduct ? "current" : ""}> <a href="javascript:void(0);" onClick={() => settabProduct(!tabProduct)}> <i className="icon-edit" /> Products <i class={tabProduct ? "arrow icon-angle-down" : "arrow icon-angle-right"}></i></a>
                            <ul className="sub-menu" style={{ display: tabProduct ? "block" : "none" }}>
                                <li>
                                    <a href="#!">
                                        <i className="icon-angle-right" /> All Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="icon-angle-right" /> Add New Product
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="icon-angle-right" /> Categories
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="icon-angle-right" /> Brands
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="icon-angle-right" /> Inventory Management
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="icon-angle-right" /> Discounts/Promotions
                                    </a>
                                </li>
                            </ul>
                        </li>

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
