import React from 'react'
import TopHeader from './TopHeader'
import AsideBar from './AsideBar'
import AppContent from './AppContent'
import Footer from './Footer'

const DefaultLayout = () => {
    return (
        <div>
            <div className="wrapper">
                <TopHeader />
                <AsideBar />
                <div class="content-wrapper">
                    <AppContent />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout
