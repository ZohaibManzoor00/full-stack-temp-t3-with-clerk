import { Footer } from "../(home)/_components/footer";
import { Navbar } from "../(home)/_components/navbar";

export default function SEOLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
