import { Footer } from "../_components/footer";
import { Navbar } from "../_components/navbar";
import { SearchFilters } from "../_components/search-filters";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchFilters />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
}
