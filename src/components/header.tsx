import { homePath, ticketsPath } from "@/path";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { LucideKanban } from "lucide-react";

const Header = () => {
  return (
    <nav
      className="supports-backdrop-blur:bg-background/60 
        fixed left-0
        right-0
        top-0 z-20 w-full bg-background/80 backdrop-blur
        flex justify-between py-2.5 px-5 border-b"
    >
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban />
          <h1 className=" ml-2 text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div>
        {/* <Button asChild variant="outline"> */}
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "outline" })}
        >
          Tickets
        </Link>
        {/* </Button> */}
      </div>
    </nav>
  );
};

export { Header };
