// import PageHeader from '@/components/pageHeader/PageHeader'
import { redirect } from 'next/navigation';

const page = () => {
//      const headerData = {
//     title: "All Products",
//     navItems: [
//       { label: "Home ", href: "/" },
//       { label: "My Profile", href: "/My Profile" },
//        { label: " Personal Information", href: "/ Personal Information" },
//     ],
//   };

  return (
    redirect("/account/personal-information")

  )
}

export default page