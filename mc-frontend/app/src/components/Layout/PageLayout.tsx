import type { PageLayoutProps } from "../../types/pageLayouttype";
import NaveBar from "../NaveBar";
import SideBar from "../SideBar";

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <NaveBar />
      <SideBar />
      <div className="md:ml-64 pt-16">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
