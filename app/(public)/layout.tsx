export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-4xl mx-auto w-full py-4">{children}</div>;
}
