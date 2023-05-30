import React from 'react'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

const Article = () => {
    return (
        <>
            <main className={`text-dark w-full min-h-screen dark:text-light`}>
                <Layout className={`pt-10 md:pt-5 sm:pt-3`}>
                    {/* Header Section */}
                    <section className={`flex items-center justify-between`}>
                        <h1 className={`text-black text-3xl font-bold mb-5`}>Article</h1>
                        <Link href='/newArticle' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Article</Link>
                    </section>

                    {/* Search Box */}
                    <section>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="article-search" className="block w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search article..." required />
                        </div>
                    </section>

                    {/* List */}
                    <section className='mt-5'>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Uploaded At
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            New India
                                        </td>
                                        <td className="px-6 py-4">
                                            National
                                        </td>
                                        <td className="px-6 py-4">
                                            12:45 PM
                                        </td>
                                        <td className="px-6 py-4">
                                            Published
                                        </td>
                                        <td className="px-6 py-4">
                                            <a className='px-4 py-2 bg-green-500 text-light font-semibold rounded mr-1 cursor-pointer'>View</a>
                                            <a className='px-4 py-2 bg-rose-500 text-light font-semibold rounded ml-1 cursor-pointer'>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </Layout>
            </main>
        </>
    )
}

export default Article