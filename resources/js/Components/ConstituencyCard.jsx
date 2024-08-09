import React from 'react';

const ConstituencyCard = ({ constituency }) => {
    if (!constituency) {
        return (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
                <div >
                    Data not available yet, check later
                </div>
            </div>
        );
    }


    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    {constituency.constituency} constituency
                </h3>
            </div>
            <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">MP
                        <div>Hon. {constituency.mp || 'N/A'}</div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">Swing</div>
                    <div>{constituency.swing || 'N/A'}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">Region</div>
                    <div>{constituency.region || 'N/A'}</div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        Click on the constituency to see more info
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstituencyCard;
