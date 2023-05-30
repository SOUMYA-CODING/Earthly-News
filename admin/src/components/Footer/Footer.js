import React from 'react'
import Layout from '../Layout/Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className={`w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base`}>
                <Layout className={`py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:text-center`}>
                    <span>
                        {new Date().getFullYear()} &copy; All Rights Reserved.
                    </span>
                    <span>
                        Built and design by
                        <Link href='' className={`underline underline-offset-2`}>
                            Soumya Prakash Sahu
                        </Link>
                    </span>
                </Layout>
            </footer>
        </>
    )
}

export default Footer