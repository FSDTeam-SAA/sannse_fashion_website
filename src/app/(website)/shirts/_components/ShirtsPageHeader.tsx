import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function ShirtsPageHeader() {
  const headerData = {
    title: "Shirts",
    navItems: [
      { label: "Home ", href: "/" },
      { label: "Shirts ", href: "/Suits" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default ShirtsPageHeader;
