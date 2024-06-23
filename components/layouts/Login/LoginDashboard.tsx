import { useToast } from "components/ui/use-toast";
import { signOutFirebase } from "lib/firebase/auth";
import { Bell, CircleUser } from "lucide-react";
import { ReactNode } from "react";

import SidebarLogin from "./SidebarLogin";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import { Button } from "components/ui/button";

interface Props {
  title?: string;
  children: ReactNode;
}
function LoginDashboard({ title = "Dashboard", children }: Props) {
  const { toast } = useToast();

  function handleLogout() {
    signOutFirebase().then(() => {
      toast({
        description: "Sign-out Successfull",
      });
    });
  }
  return (
    <div className="grid min-h-[100vh] grid-cols-[220px_1fr] bg-slate-100">
      <SidebarLogin />
      <section>
        <div className="flex flex-row items-center justify-between bg-blue-400 px-8 py-4 text-white">
          <h1>{title}</h1>
          <div className="flex flex-row items-center gap-8">
            <Bell />
            <Popover>
              <PopoverTrigger>
                <CircleUser />
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <Button variant={"link"} onClick={handleLogout}>
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="grid-content mt-12">{children}</div>
      </section>
    </div>
  );
}

export default LoginDashboard;
