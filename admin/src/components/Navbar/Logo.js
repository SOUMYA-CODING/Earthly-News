import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (    
        <>
            <div className={`flex items-center justify-center mt-2`}>
                <Link href="/" className={`h-14 text-dark flex items-center justify-center rounded-full text-3xl font-extrabold dark:text-light`}>
                    <span className={`text-red `}>{`Earthly`}</span>
                    &nbsp;  
                    <span>{`News`}</span>
                </Link>
            </div>
        </>
    )
}

export default Logo