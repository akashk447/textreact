import React from 'react'
import TopHeader from './TopHeader'
import AsideBar from './AsideBar'
import AppContent from './AppContent'

const DefaultLayout = () => {
    return (
        <div>
            <TopHeader />
            <div id='container'>
                <AsideBar />
                <div id='content'>
                    <AppContent />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
