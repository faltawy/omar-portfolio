import React from 'react';
import { useContext } from 'react';
import ViewContext from '../ViewContext';
import { headerItems } from './utils';


function HeaderItem({ label, icon, viewName }) {
    const { setView, currentview } = useContext(ViewContext)
    const active = currentview === viewName;
    function handleOnClick() { setView(viewName) }
    return (
        <button className={`flex items-center gap-1 bg-White p-3 sm:px-1.5 sm:py-1 rounded-full 
        transition-all sm:rounded-sm sm:border-2
        ${active ? 'sm:border-opacity-100 text-Granite-Gray sm:border-Granite-Gray sm:hover:text-Silver' : 'sm:border-opacity-0 text-Gray-Web '}`}
            onClick={handleOnClick}>
            <div className='flex items-center gap-1 font-semibold flex-row-reverse'>
                <span className='hidden sm:inline'>{label}</span>
                <i className='text-lg'>{icon}</i>
            </div>
        </button>
    )
}

function Header() {
    return (
        <header className='bg-White flex z-40 items-center w-full h-[50px] py-1.5 px-2 sm:items-center sm:justify-between sm:gap-3'>
            <div className='font-extrabold text-center text-2xl whitespace-nowrap'>
                <h1 className='capitalize'>Omar Tag</h1>
            </div>
            <nav className='flex items-center justify-center gap-2 mx-auto container fixed bottom-5 w-full sm:m-0 sm:static sm:w-fit'>
                <div className='flex items-center justify-around gap-3'>{
                    headerItems.map((item, index) => {
                        return <HeaderItem {...item} key={index} />
                    })
                }</div>
            </nav>
        </header>
    )
}

export default Header