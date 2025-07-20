import PageHeader from '@/components/pageHeader/PageHeader';
import React from 'react';

function JacketsPageHeader() {
  const headerData = {
    title: "Jackets",
    navItems: [
      { label: "Home ", href: "/" },
      { label: "Jackets ", href: "/Suits" },
    ],
  };

  return (
    <div>
      <PageHeader title={headerData.title} navItems={headerData.navItems} />
      {/* Your page content goes here */}
    </div>
  );
}

export default JacketsPageHeader;
