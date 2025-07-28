import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function ProductDetailsHeader() {
  const headerData = {
    title: "Product Details",
    navItems: [
      { label: "Home", href: "/" },
      { label: "Product", href: "/about-us" },
      { label: "Product-Details", href: "/about-us" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default ProductDetailsHeader;
