import { cn } from "lib/utils";
import { FolderCog, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

function SidebarLogin() {
  return (
    <aside className="sticky top-0 flex h-screen flex-col gap-2 bg-slate-600 text-slate-300">
      <HomeLink>
        <div className="p-4 text-white">
          <h3>Amalia Hospital</h3>
        </div>
      </HomeLink>
      <hr className="border-slate-500" />
      <HomeLink>
        <div className="flex flex-row items-center gap-2 px-4 py-2 hover:bg-slate-500">
          <Home width={16} height={16} />
          <span>Admin Dashboard</span>
        </div>
      </HomeLink>
      <hr className="border-slate-500" />
      <section className="flex flex-col gap-4">
        <div className="px-4">Menu</div>
        <ul>
          <Li href="article" text="Article" />
          <Li href="article2" text="Data Peserta" />
          <Li href="article3" text="Data User" />
        </ul>
      </section>
    </aside>
  );
}

export default SidebarLogin;

function Li({ text, href }: { text: string; href: string }) {
  const router = useRouter();
  const pathname = router.pathname;
  const lastPath = pathname.split("/").pop();
  const isActive = lastPath === href;

  return (
    <Link href={`/dashboard-admin/${href}`}>
      <li
        className={cn(
          "flex cursor-pointer flex-row items-center gap-2 px-4 py-1 transition-colors hover:bg-slate-500",
          isActive && "bg-slate-700",
        )}
      >
        <FolderCog width={16} height={16} />
        <span>{text}</span>
      </li>
    </Link>
  );
}

function HomeLink({ children }: { children: ReactNode }) {
  return <Link href={"/dashboard-admin"}>{children}</Link>;
}
