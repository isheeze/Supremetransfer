import AdminNav from '@components/AdminNav';
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Next Shadcn",
    description: "Basic dashboard with Next.js and Shadcn",
  };
  
  export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <>
      <div className="min-h-full">
        <AdminNav />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
