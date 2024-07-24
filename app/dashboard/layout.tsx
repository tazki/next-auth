const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">
        <div className="flex flex-row justify-between items-center p-4">
          Shared navbar
        </div>
      </nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
