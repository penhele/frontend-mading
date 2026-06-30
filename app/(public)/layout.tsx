import FloatingNavbar from "@/components/layouts/floating-navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl mx-auto w-full pt-24 pb-8 px-4">
      <FloatingNavbar />
      {children}
    </div>
  );
}
