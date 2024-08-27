import Navbar from "@/components/navbar";
import UserProvider from "@/context/user-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <UserProvider>
        {children}
        </UserProvider>
      </body>
    </html>
  );
}
