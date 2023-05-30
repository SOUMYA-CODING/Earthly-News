import React from 'react'
import Layout from '@/components/Layout/Layout'

const index = () => {
    return (
        <>
            <main className={`text-dark w-full min-h-screen dark:text-light`}>
                <Layout className={`pt-10 md:pt-5 sm:pt-3`}>
                    <h1 className={`text-black text-3xl font-bold mb-5`}>Statistics</h1>
                    <div className={`grid grid-cols-4 md:grid-cols-8 gap-4 w-full lg:flex-col`}>
                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <p className="mb-2 tracking-tight text-gray-700 dark:text-white">Total Article</p>
                            <p className="font-bold text-gray-900 text-3xl dark:text-gray-400">5 +</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <p className="mb-2 tracking-tight text-gray-700 dark:text-white">Total Category</p>
                            <p className="font-bold text-gray-900 text-3xl dark:text-gray-400">5 +</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <p className="mb-2 tracking-tight text-gray-700 dark:text-white">Total Users</p>
                            <p className="font-bold text-gray-900 text-3xl dark:text-gray-400">5 +</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <p className="mb-2 tracking-tight text-gray-700 dark:text-white">Total Views</p>
                            <p className="font-bold text-gray-900 text-3xl dark:text-gray-400">5 +</p>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default index