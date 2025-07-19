// app/about-us/page.tsx
import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function SuitsPageHeader() {
  const headerData = {
    title: "Suits",
    navItems: [
      { label: "Home ", href: "/" },
      { label: "Suits ", href: "/Suits" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default SuitsPageHeader;
