"use client"
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  return (
    <html lang="en">
      <body>
        {children}
        <button onClick={() => router.push("/")}>main page</button>
        <br />
        <button onClick={() => router.push("/ssg")}>Go to SSG Page</button>
      </body>
    </html>
  );
}
