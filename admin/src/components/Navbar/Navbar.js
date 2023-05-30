import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[3px] inline-block w-0 bg-dark   absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[3px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className={`w-full px-32 py-2 z-10 font-medium flex items-center justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8`}>
                {/* ======== Logo ======== */}
                <Logo />
                {/* ======== Nav Items ======== */}
                <div className={`w-auto flex items-center justify-between lg:hidden`}>
                    <nav className={`flex items-center justify-center`}>
                        <CustomLink href="/" title="Home" className='mr-4' />
                        <CustomLink href="/article" title="Article" className='mx-4' />
                        <CustomLink href="/category" title="Category" className='ml-4' />
                    </nav>
                </div>

                {/* ======== Mobile Nav Items ======== */}
                {
                    isOpen ?
                        <div className={`min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32`} initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }}>
                            <nav className={`flex flex-col items-center justify-center`}>
                                <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                                <CustomMobileLink href="/article" title="Artcile" className='' toggle={handleClick} />
                                <CustomMobileLink href="/category" title="Category" className='' toggle={handleClick} />
                            </nav>
                        </div>
                        : null
                }

                {/* ======== Menu Icon ======== */}
                <button className={`flex-col justify-center items-center hidden lg:flex`} onClick={handleClick}>
                    <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>
            </header>
        </>
    )
}

export default NavBar