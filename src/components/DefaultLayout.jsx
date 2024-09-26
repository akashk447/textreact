import React, { useState } from 'react'
import TopHeader from './TopHeader'
import AsideBar from './AsideBar'
import AppContent from './AppContent'

const DefaultLayout = () => {
    const [showSideBar, setShowSidebar] = useState(true)
    return (
        <div>
            <TopHeader showSideBar={showSideBar} setShowSideBar={setShowSidebar} />
            <div id='container'className={showSideBar?"fixed-header":"fixed-header sidebar-closed"}>
                <AsideBar showSideBar={showSideBar}/>
                <div id='content'>
                    <AppContent />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
