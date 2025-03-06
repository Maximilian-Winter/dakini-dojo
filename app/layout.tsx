import Sidebar from "@/components/shared/sidebar";
import Footer from "@/components/shared/footer";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-charcoal text-softwhite flex">
        <Sidebar />
        <main className="flex-1 min-h-screen flex flex-col">
          <section className="flex-1 p-6">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
