import AdminHeader from "@/components/admin/admin-header";

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
