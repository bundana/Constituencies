import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout.jsx";
import LogoSmall from "@/Assets/NDC-logo.webp";
import { useEffect, useState } from "react";

export default function ConstituencyInfo({ logo, constituency }) {
    const [constituencyInfo, setConstituencyInfo] = useState([]);

    useEffect(() => {
        // Wrap single object in an array if needed
        setConstituencyInfo(Array.isArray(constituency) ? constituency : [constituency]);
     }, [constituency]);

    return (
        <AppLayout logo={logo}>
            <Head title={`${constituency?.constituency || 'Constituency'} Info`} />
            <div className="bg-background text-foreground">
                <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
                    <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
                        <div className="space-y-4 not-prose mb-8">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border-2 border-primary">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt="@shadcn"
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
                                {constituency?.constituency || 'Constituency'} constituency
                            </h1>
                        </div>
                        <div className="container mx-auto">
                            <section className="mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                        <tr className="bg-muted text-muted-foreground text-primary-red text-center">
                                            <th className="px-4 py-2 text-left">Details</th>
                                            <th className="px-4 py-2 text-left"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {constituencyInfo.map(c => (
                                            <tr key={c.id} className="border-b">
                                                <td className="px-4 py-2">
                                                    <div className="flex justify-between">
                                                        <span className="font-extrabold text-gray-700">Region:</span>
                                                        <span>{c.region}</span>
                                                    </div>
                                                    <div className="flex justify-between mt-2">
                                                        <span
                                                            className="font-extrabold text-gray-700">Constituency:</span>
                                                        <span>{c.constituency}</span>
                                                    </div>
                                                    <div className="flex justify-between mt-2">
                                                        <span className="font-extrabold text-gray-700">Swing:</span>
                                                        <span>{c.swing}</span>
                                                    </div>
                                                    <div className="flex justify-between mt-2">
                                                        <span className="font-extrabold text-gray-700">MP:</span>
                                                        <span className="text-primary-green font-extrabold">
                                                            Hon. {c.mp}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2"></td>
                                                {/* Empty cell to align with header */}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>

                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </AppLayout>
    );
}
