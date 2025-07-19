// app/about-us/page.tsx
import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function ProductPageHeader() {
  const headerData = {
    title: "All Products",
    navItems: [
      { label: "Home ", href: "/" },
      { label: "Products ", href: "/products" },
       { label: "Readymade Product", href: "/about-us" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default ProductPageHeader;
