import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import { useEffect, useState } from "react";
import { Link } from '@inertiajs/react'

export default function SearchComponent({ constituencies }) {
    const [query, setQuery] = useState('');
    const [filteredConstituencies, setFilteredConstituencies] = useState([]);

    useEffect(() => {
        if (query) {
            const results = constituencies.filter(c =>
                c.constituency.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredConstituencies(results.length > 0 ? results : [{ id: null, constituency: 'No data found' }]);
        } else {
            setFilteredConstituencies([]);
        }
    }, [query, constituencies]);

    return (
        <div className="relative mx-auto w-full max-w-md  m-3"> {/* Centering and limiting the width */}
            <div className="flex items-center border rounded-lg overflow-hidden">
                <FaSearch className="text-muted-foreground absolute left-3 top-1/2 text-primary-green
                transform -translate-y-1/2 h-5 w-5" />
                <input
                    type="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 pl-10 py-2 text-sm border-none text-primary-green
                    rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
            </div>
            {filteredConstituencies.length > 0 && (
                <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
                    <ul>
                        {filteredConstituencies.map(c => (
                            c.id ? (
                                <li key={c.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <Link href={route('constituency.view', c.id)} className="block">
                                        {c.constituency}
                                    </Link>
                                </li>
                            ) : (
                                <li key="no-data" className="px-4 py-2 text-center text-gray-500">
                                    {c.constituency}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
