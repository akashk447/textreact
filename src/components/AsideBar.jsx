import React from 'react'

const AsideBar = () => {
    return (
        <div>
            <div id="sidebar" className="sidebar-fixed">
                <div id="sidebar-content">
                    <form className="sidebar-search">
                        <div className="input-box"> <button type="submit" className="submit"> <i className="icon-search" /> </button>
                            <span> <input type="text" placeholder="Search..." /> </span>
                        </div>
                    </form>
                    <div className="sidebar-search-results"> <i className="icon-remove close" />
                        <div className="title"> Documents </div>
                        <ul className="notifications">
                            <li> <a href="javascript:void(0);">
                                <div className="col-left"> <span className="label label-info"><i className="icon-file-text" /></span> </div>
                                <div className="col-right with-margin"> <span className="message"><strong>John Doe</strong>
                                    received $1.527,32</span> <span className="time">finances.xls</span> </div>
                            </a> </li>
                            <li> <a href="javascript:void(0);">
                                <div className="col-left"> <span className="label label-success"><i className="icon-file-text" /></span> </div>
                                <div className="col-right with-margin"> <span className="message">My name is <strong>John
                                    Doe</strong> ...</span> <span className="time">briefing.docx</span> </div>
                            </a> </li>
                        </ul>
                        <div className="title"> Persons </div>
                        <ul className="notifications">
                            <li> <a href="javascript:void(0);">
                                <div className="col-left"> <span className="label label-danger"><i className="icon-female" /></span> </div>
                                <div className="col-right with-margin"> <span className="message">Jane
                                    <strong>Doe</strong></span> <span className="time">21 years old</span> </div>
                            </a> </li>
                        </ul>
                    </div>
                    <ul id="nav">
                        <li> <a href="index.html"> <i className="icon-dashboard" /> Dashboard </a> </li>
                        <li> <a href="javascript:void(0);"> <i className="icon-desktop" /> UI Features <span className="label label-info pull-right">6</span> </a>
                            <ul className="sub-menu">
                                <li> <a href="ui_general.html"> <i className="icon-angle-right" /> General </a> </li>
                                <li> <a href="ui_buttons.html"> <i className="icon-angle-right" /> Buttons </a> </li>
                                <li> <a href="ui_tabs_accordions.html"> <i className="icon-angle-right" /> Tabs &amp;
                                    Accordions </a> </li>
                                <li> <a href="ui_sliders.html"> <i className="icon-angle-right" /> Sliders </a> </li>
                                <li> <a href="ui_nestable_list.html"> <i className="icon-angle-right" /> Nestable List </a>
                                </li>
                                <li> <a href="ui_typography.html"> <i className="icon-angle-right" /> Typography / Icons </a>
                                </li>
                                <li> <a href="ui_google_maps.html"> <i className="icon-angle-right" /> Google Maps </a> </li>
                                <li> <a href="ui_grid.html"> <i className="icon-angle-right" /> Grid </a> </li>
                            </ul>
                        </li>
                        <li className="current open"> <a href="javascript:void(0);"> <i className="icon-edit" /> Form Elements
                        </a>
                            <ul className="sub-menu">
                                <li className="current"> <a href="form_components.html"> <i className="icon-angle-right" /> Form
                                    Components </a> </li>
                                <li> <a href="form_layouts.html"> <i className="icon-angle-right" /> Form Layouts </a> </li>
                                <li> <a href="form_validation.html"> <i className="icon-angle-right" /> Form Validation </a>
                                </li>
                                <li> <a href="form_wizard.html"> <i className="icon-angle-right" /> Form Wizard </a> </li>
                            </ul>
                        </li>
                        <li> <a href="javascript:void(0);"> <i className="icon-table" /> Tables </a>
                            <ul className="sub-menu">
                                <li> <a href="tables_static.html"> <i className="icon-angle-right" /> Static Tables </a> </li>
                                <li> <a href="tables_dynamic.html"> <i className="icon-angle-right" /> Dynamic Tables
                                    (DataTables) </a> </li>
                                <li> <a href="tables_responsive.html"> <i className="icon-angle-right" /> Responsive Tables
                                </a> </li>
                            </ul>
                        </li>
                        <li> <a href="charts.html"> <i className="icon-bar-chart" /> Charts &amp; Statistics </a> </li>
                        <li> <a href="javascript:void(0);"> <i className="icon-folder-open-alt" /> Pages </a>
                            <ul className="sub-menu">
                                <li> <a href="login.html"> <i className="icon-angle-right" /> Login </a> </li>
                                <li> <a href="pages_user_profile.html"> <i className="icon-angle-right" /> User Profile </a>
                                </li>
                                <li> <a href="pages_calendar.html"> <i className="icon-angle-right" /> Calendar </a> </li>
                                <li> <a href="pages_invoice.html"> <i className="icon-angle-right" /> Invoice </a> </li>
                                <li> <a href="404.html"> <i className="icon-angle-right" /> 404 Page </a> </li>
                            </ul>
                        </li>
                        <li> <a href="javascript:void(0);"> <i className="icon-list-ol" /> 4 Level Menu </a>
                            <ul className="sub-menu">
                                <li className="open-default"> <a href="javascript:void(0);"> <i className="icon-cogs" /> Item 1
                                    <span className="arrow" /> </a>
                                    <ul className="sub-menu">
                                        <li className="open-default"> <a href="javascript:void(0);"> <i className="icon-user" />
                                            Sample Link 1 <span className="arrow" /> </a>
                                            <ul className="sub-menu">
                                                <li className="current"><a href="javascript:void(0);"><i className="icon-remove" /> Sample Link 1</a></li>
                                                <li><a href="javascript:void(0);"><i className="icon-pencil" /> Sample Link
                                                    1</a></li>
                                                <li><a href="javascript:void(0);"><i className="icon-edit" /> Sample Link
                                                    1</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0);"><i className="icon-user" /> Sample Link 1</a></li>
                                        <li><a href="javascript:void(0);"><i className="icon-external-link" /> Sample Link
                                            2</a></li>
                                        <li><a href="javascript:void(0);"><i className="icon-bell" /> Sample Link 3</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);"> <i className="icon-globe" /> Item 2 <span className="arrow" /> </a>
                                    <ul className="sub-menu">
                                        <li><a href="javascript:void(0);"><i className="icon-user" /> Sample Link 1</a></li>
                                        <li><a href="javascript:void(0);"><i className="icon-external-link" /> Sample Link
                                            1</a></li>
                                        <li><a href="javascript:void(0);"><i className="icon-bell" /> Sample Link 1</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);"> <i className="icon-folder-open" /> Item 3 </a> </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="sidebar-title"> <span>Notifications</span> </div>
                    <ul className="notifications demo-slide-in">
                        <li style={{ display: 'none' }}>
                            <div className="col-left"> <span className="label label-danger"><i className="icon-warning-sign" /></span>
                            </div>
                            <div className="col-right with-margin"> <span className="message">Server <strong>#512</strong>
                                crashed.</span> <span className="time">few seconds ago</span> </div>
                        </li>
                        <li style={{ display: 'none' }}>
                            <div className="col-left"> <span className="label label-info"><i className="icon-envelope" /></span>
                            </div>
                            <div className="col-right with-margin"> <span className="message"><strong>John</strong> sent you a
                                message</span> <span className="time">few second ago</span> </div>
                        </li>
                        <li>
                            <div className="col-left"> <span className="label label-success"><i className="icon-plus" /></span> </div>
                            <div className="col-right with-margin"> <span className="message"><strong>Emma</strong>'s account was
                                created</span> <span className="time">4 hours ago</span> </div>
                        </li>
                    </ul>
                    <div className="sidebar-widget align-center">
                        <div className="btn-group" data-toggle="buttons" id="theme-switcher"> <label className="btn active"> <input type="radio" name="theme-switcher" data-theme="bright" /><i className="icon-sun" /> Bright
                        </label> <label className="btn"> <input type="radio" name="theme-switcher" data-theme="dark" /><i className="icon-moon" /> Dark </label> </div>
                    </div>
                </div>
                <div id="divider" className="resizeable" />
            </div>

        </div>
    )
}

export default AsideBar
