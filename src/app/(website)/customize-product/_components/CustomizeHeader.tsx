import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function CustomizeHeader() {
  const headerData = {
    title: "Customize Product",
    navItems: [
      { label: "Home ", href: "/" },
      { label: "Products ", href: "/products" },
       { label: "Customize Product", href: "/about-us" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default CustomizeHeader;
