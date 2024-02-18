export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children as JSX.Element;
}
