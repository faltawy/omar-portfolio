import React, { useState } from 'react'
import Image from '../ExpandImage/Image'


const works = [
    { img: 'https://picsum.photos/800/900', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/800/600', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/700/700', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/800/300', title: 'logo design for assar startup', category: 'social media design' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'digital drawing' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' }
]

function getCategories() {
    let categories = [];
    works.forEach((work) => {
        const cat = work.category;
        if (!categories.includes(cat)) {
            categories.push(cat)
        }
    })
    return categories
}

function Switch({ category, change, selected }) {
    const ifSelected = selected === category;

    return (
        <button className={`transition-all text-slate-500 text-md leading-tight ${ifSelected ? 'font-bold text-opacity-100' : 'text-opacity-60 font-semibold'}`} onClick={() => { change(category) }}>
            <span>{category.toLowerCase()}</span>
        </button>
    )
}

function MyWork() {
    const categories = getCategories()
    const [selected, setSelected] = useState(categories[0])
    return (
        <section className='py-5 px-4 animate-in fade-in-40 '>

            <div className="container h-full">
                <div className="flex gap-2 items-center justify-center overflow-x-auto p-1">
                    {
                        categories.map((c, index) => (<Switch category={c} selected={selected} change={setSelected} key={index} />))
                    }
                </div>
                <div className="works grid grid-cols-1 sm:grid-cols-3 items-center place-content-center place-items-center w-full gap-3 p-2">
                    {
                        works.map(
                            (work, index) => {
                                if (work.category === selected) {
                                    return <Image {...work} key={index} />
                                }
                            }
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default MyWork