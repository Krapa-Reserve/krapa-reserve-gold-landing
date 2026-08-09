import Nav from "@/components/menu/nav";
import Banner from "@/components/hero/banner";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="sticky top-0 z-50 w-full">
        <Nav />
      </div>
      <div className="flex w-full flex-col">
        <Banner />
      </div>
    </div>
  );
}
