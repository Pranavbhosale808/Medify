import { Button } from "@/components/ui/button";
import { AuthContext } from "@/store/auth";
import { useContext } from "react";

function Logout() {
  const { handleLogout } = useContext(AuthContext);
  return (
    <Button size="sm" onClick={handleLogout}>
      Log out
    </Button>
  );
}

export default Logout;
