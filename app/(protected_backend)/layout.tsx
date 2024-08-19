import { Header } from "@/app/(protected_backend)/_components/header";
import { Sidebar } from "@/app/(protected_backend)/_components/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="grid h-screen w-full pl-[56px]">
          <Sidebar />
          <div className="flex flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default ProtectedLayout;
