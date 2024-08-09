import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout.jsx";
import LogoSmall from "@/Assets/NDC-logo.webp";
import { FaEye } from 'react-icons/fa'; // Import the eye icon

export default function Constituencies({ constituencies, logo }) {
    const [constituenciesData, setConstituenciesData] = useState(constituencies);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [displayAll, setDisplayAll] = useState(false);

    useEffect(() => {
        setConstituenciesData(constituencies);
    }, [constituencies]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handleDisplayAllToggle = () => {
        setDisplayAll(!displayAll);
        setCurrentPage(1); // Reset to first page when toggling display all
    };

    const filteredConstituencies = constituenciesData.filter((constituency) =>
        constituency.constituency.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredConstituencies.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = displayAll ? filteredConstituencies.length : startIndex + itemsPerPage;
    const paginatedConstituencies = filteredConstituencies.slice(startIndex, endIndex);

    return (
        <AppLayout logo={logo}>
            <Head title="Constituencies" />
            <div className="bg-background text-foreground">
                <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
                    <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
                        <div className="space-y-4 not-prose mb-8">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border-2 border-primary">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt="Logo"
                                            src={LogoSmall}
                                        />
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-primary-green">2024 NDC Election Strategy</p>
                                        <p className="text-sm text-muted-foreground">
                                            Key Constituencies to Defend and Flip
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-center text-primary-green">
                                Constituencies
                            </h1>
                        </div>
                        <div className="container mx-auto">
                            <section className="mb-8">
                                <div className="overflow-x-auto">
                                    <div className="p-6 bg-white shadow-md rounded-lg">
                                        <div className="flex flex-col sm:flex-row sm:space-x-6 mb-6">
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Search constituencies..."
                                                    value={search}
                                                    onChange={handleSearchChange}
                                                    className="p-2 border border-gray-300 rounded-md w-full"
                                                />
                                            </div>
                                            {
                                                paginatedConstituencies.length > 0 && (
                                                    <div className="flex-1 mt-4 sm:mt-0">
                                                        <button
                                                            onClick={handleDisplayAllToggle}
                                                            className={`text-white px-4 py-2 rounded-md ${
                                                                displayAll ? 'bg-green-900' : 'bg-red-600'
                                                            }`}
                                                        >
                                                            {displayAll ? 'Show All' : 'Show Paginated'}
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-extrabold text-primary-green text-gray-500 uppercase tracking-wider">Constituency</th>
                                                    <th className="px-6 py-3 text-left text-xs font-extrabold text-primary-green text-gray-500 uppercase tracking-wider">MP</th>
                                                    <th className="px-6 py-3 text-left text-xs font-extrabold text-primary-green text-gray-500 uppercase tracking-wider">Region</th>
                                                    <th className="px-6 py-3 text-left text-xs font-extrabold text-primary-green text-gray-500 uppercase tracking-wider">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                {paginatedConstituencies.length > 0 ? (
                                                    paginatedConstituencies.map((constituency) => (
                                                        <tr key={constituency.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {constituency.constituency}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {constituency.mp || 'N/A'}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {constituency.region || 'N/A'}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                <Link
                                                                    href={route('constituency.view', constituency.id)}
                                                                    className="text-indigo-600 hover:text-indigo-900 flex items-center space-x-2"
                                                                >
                                                                    <FaEye className="text-lg text-primary-green" />
                                                                    <span className="sr-only">Visit</span> {/* Optional: Accessible text for screen readers */}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                                            <p className="text-primary-red font-extrabold m-5">No Constituencies data to display, try again</p>
                                                        </td>
                                                    </tr>
                                                )}
                                                </tbody>
                                            </table>
                                        </div>
                                        {!displayAll && totalPages > 1 && (
                                            <div className="mt-4 flex justify-center">
                                                <nav className="flex flex-wrap gap-2">
                                                    {[...Array(totalPages).keys()].map((page) => (
                                                        <button
                                                            key={page}
                                                            onClick={() => handlePageChange(page + 1)}
                                                            className={`px-4 py-2 border rounded-md ${currentPage === page + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'}`}
                                                        >
                                                            {page + 1}
                                                        </button>
                                                    ))}
                                                </nav>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </AppLayout>
    );
}
