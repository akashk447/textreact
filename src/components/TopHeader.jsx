import React from 'react'

const TopHeader = ({ setShowSideBar,showSideBar }) => {
    return (
        <div>
            <header className="header navbar navbar-fixed-top" role="banner">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li className="nav-toggle"><a href="javascript:void(0);" title><i className="icon-reorder" /></a></li>
                    </ul> <a className="navbar-brand" href="index.html"> <img src="assets/img/logo.png" alt="logo" />
                        <strong>&nbsp;&nbsp;Seven</strong>DIV </a> <a href="#" onClick={()=>setShowSideBar(!showSideBar)} className="toggle-sidebar bs-tooltip" data-placement="bottom" data-original-title="Toggle navigation"> <i className="icon-reorder" /> </a>
                    <ul className="nav navbar-nav navbar-left hidden-xs hidden-sm">
                        <li> <a href="#"> Dashboard </a> </li>
                        <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Dropdown <i className="icon-caret-down small" /> </a>
                            <ul className="dropdown-menu">
                                <li><a href="#"><i className="icon-user" /> Example #1</a></li>
                                <li><a href="#"><i className="icon-calendar" /> Example #2</a></li>
                                <li className="divider" />
                                <li><a href="#"><i className="icon-tasks" /> Example #3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <i className="icon-warning-sign" /> <span className="badge">5</span> </a>
                            <ul className="dropdown-menu extended notification">
                                <li className="title">
                                    <p>You have 5 new notifications</p>
                                </li>
                                <li> <a href="javascript:void(0);"> <span className="label label-success"><i className="icon-plus" /></span> <span className="message">New user
                                    registration.</span> <span className="time">1 mins</span> </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="label label-danger"><i className="icon-warning-sign" /></span> <span className="message">High CPU load on
                                    cluster #2.</span> <span className="time">5 mins</span> </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="label label-success"><i className="icon-plus" /></span> <span className="message">New user
                                    registration.</span> <span className="time">10 mins</span> </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="label label-info"><i className="icon-bullhorn" /></span> <span className="message">New items are in
                                    queue.</span> <span className="time">25 mins</span> </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="label label-warning"><i className="icon-bolt" /></span> <span className="message">Disk space to 85%
                                    full.</span> <span className="time">55 mins</span> </a> </li>
                                <li className="footer"> <a href="javascript:void(0);">View all notifications</a> </li>
                            </ul>
                        </li>
                        <li className="dropdown hidden-xs hidden-sm"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <i className="icon-tasks" /> <span className="badge">7</span> </a>
                            <ul className="dropdown-menu extended notification">
                                <li className="title">
                                    <p>You have 7 pending tasks</p>
                                </li>
                                <li> <a href="javascript:void(0);"> <span className="task"> <span className="desc">Preparing new
                                    release</span> <span className="percent">30%</span> </span>
                                    <div className="progress progress-small">
                                        <div style={{ width: '30%' }} className="progress-bar progress-bar-info" />
                                    </div>
                                </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="task"> <span className="desc">Change
                                    management</span> <span className="percent">80%</span> </span>
                                    <div className="progress progress-small progress-striped active">
                                        <div style={{ width: '80%' }} className="progress-bar progress-bar-danger" />
                                    </div>
                                </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="task"> <span className="desc">Mobile
                                    development</span> <span className="percent">60%</span> </span>
                                    <div className="progress progress-small">
                                        <div style={{ width: '60%' }} className="progress-bar progress-bar-success" />
                                    </div>
                                </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="task"> <span className="desc">Database
                                    migration</span> <span className="percent">20%</span> </span>
                                    <div className="progress progress-small">
                                        <div style={{ width: '20%' }} className="progress-bar progress-bar-warning" />
                                    </div>
                                </a> </li>
                                <li className="footer"> <a href="javascript:void(0);">View all tasks</a> </li>
                            </ul>
                        </li>
                        <li className="dropdown hidden-xs hidden-sm"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <i className="icon-envelope" /> <span className="badge">1</span> </a>
                            <ul className="dropdown-menu extended notification">
                                <li className="title">
                                    <p>You have 3 new messages</p>
                                </li>
                                <li> <a href="javascript:void(0);"> <span className="photo"><img src="assets/img/demo/avatar-1.jpg" alt /></span> <span className="subject"> <span className="from">Bob Carter</span> <span className="time">Just Now</span> </span> <span className="text"> Consetetur sadipscing
                                    elitr... </span> </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="photo"><img src="assets/img/demo/avatar-2.jpg" alt /></span> <span className="subject"> <span className="from">Jane Doe</span> <span className="time">45 mins</span> </span> <span className="text"> Sed diam nonumy...
                                </span> </a> </li>
                                <li> <a href="javascript:void(0);"> <span className="photo"><img src="assets/img/demo/avatar-3.jpg" alt /></span> <span className="subject"> <span className="from">Patrick Nilson</span>
                                    <span className="time">6 hours</span> </span> <span className="text"> No sea takimata
                                        sanctus... </span> </a> </li>
                                <li className="footer"> <a href="javascript:void(0);">View all messages</a> </li>
                            </ul>
                        </li>
                        <li> <a href="#" className="dropdown-toggle row-bg-toggle"> <i className="icon-resize-vertical" /> </a> </li>
                        <li className="dropdown"> <a href="#" className="project-switcher-btn dropdown-toggle"> <i className="icon-folder-open" /> <span>Projects</span> </a> </li>
                        <li className="dropdown user"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"> <i className="icon-male" /> <span className="username">John Doe</span> <i className="icon-caret-down small" /> </a>
                            <ul className="dropdown-menu">
                                <li><a href="pages_user_profile.html"><i className="icon-user" /> My Profile</a></li>
                                <li><a href="pages_calendar.html"><i className="icon-calendar" /> My Calendar</a></li>
                                <li><a href="#"><i className="icon-tasks" /> My Tasks</a></li>
                                <li className="divider" />
                                <li><a href="login.html"><i className="icon-key" /> Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="project-switcher" className="container project-switcher">
                    <div id="scrollbar">
                        <div className="handle" />
                    </div>
                    <div id="frame">
                        <ul className="project-list">
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-desktop" /></span> <span className="title">Lorem ipsum dolor</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-compass" /></span> <span className="title">Dolor sit invidunt</span> </a> </li>
                            <li className="current"> <a href="javascript:void(0);"> <span className="image"><i className="icon-male" /></span> <span className="title">Consetetur sadipscing elitr</span>
                            </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-thumbs-up" /></span> <span className="title">Sed diam nonumy</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-female" /></span> <span className="title">At vero eos et</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-beaker" /></span> <span className="title">Sed diam voluptua</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-desktop" /></span> <span className="title">Lorem ipsum dolor</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-compass" /></span> <span className="title">Dolor sit invidunt</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-male" /></span> <span className="title">Consetetur sadipscing elitr</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-thumbs-up" /></span> <span className="title">Sed diam nonumy</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-female" /></span> <span className="title">At vero eos et</span> </a> </li>
                            <li> <a href="javascript:void(0);"> <span className="image"><i className="icon-beaker" /></span> <span className="title">Sed diam voluptua</span> </a> </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TopHeader
