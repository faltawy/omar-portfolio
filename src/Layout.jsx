import React, { useState } from 'react'
import Header from './Components/Header'
import Contact from './Components/sections/Contact';
import Home from './Components/sections/Home';
import ViewContext from './ViewContext';
import { VIEWS_LIST } from './Components/utils';
import About from './Components/sections/About';
import MyWork from './Components/sections/MyWork';

const VIEWS = [
    { name: VIEWS_LIST.home, section: <Home /> },
    { name: VIEWS_LIST.contact, section: <Contact /> },
    { name: VIEWS_LIST.about, section: <About /> },
    { name: VIEWS_LIST.projects, section: <MyWork /> },
]

function Layout() {
    const [currentview, setView] = useState(VIEWS_LIST.home)
    const contextValue = { currentview, setView }
    return (
        <ViewContext.Provider value={contextValue}>
            <div className='w-screen h-screen bg-Onyx overflow-hidden flex items-center gap-2 flex-col'>
                <Header />
                <div className='bg-Gainsboro rounded-sm flex-1 overflow-auto w-full'>
                    {
                        VIEWS.map((view) => {
                            return currentview === view.name && view.section
                        })
                    }
                </div>
            </div>
        </ViewContext.Provider>
    )
}

export default Layout