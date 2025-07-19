// app/about-us/page.tsx
import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function AboutUsHeader() {
  const headerData = {
    title: "About Us",
    navItems: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default AboutUsHeader;
