import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayouts = () => {

    return (
        <div className="bg-gray-100 p-5 smp-3 min-h-screen sm:flex items-center justify-center">
            <Outlet/>
        </div>
    );
}

export default GuestLayouts;


