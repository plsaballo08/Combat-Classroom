import type { Metadata } from "next";
import AdminHeader from "@/components/admin/admin-header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the admin of Atlas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <main className="pt-14">{children}</main>
    </>
  );
}
