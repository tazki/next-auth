"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const onClick = () => {
  logout();
};

const SettingsPage = () => {
  const user = useCurrentUser();
  return (
    <div className="bg-white p-10 rounded-none">
      <form>
        <button onClick={onClick} type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
