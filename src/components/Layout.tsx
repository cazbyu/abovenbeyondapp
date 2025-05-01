import React from 'react';
import { Outlet } from 'react-router-dom';
import TabNavigation from './TabNavigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <TabNavigation />
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;