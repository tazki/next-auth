"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRoundCog, Users2, Webhook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Webhook className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <TooltipProvider>
          {/* <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/dashboard">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg bg-muted"
                                    aria-label="Playground"
                                >
                                    <Home className="size-5" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip> */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/clients">
                <Button
                  size="icon"
                  className="rounded-lg"
                  aria-label="Playground"
                  variant={pathname === "/clients" ? "default" : "ghost"}
                >
                  <Users2 className="h-5 w-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Clients</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/users">
                <Button
                  size="icon"
                  className="rounded-lg"
                  aria-label="Playground"
                  variant={pathname === "/users" ? "default" : "ghost"}
                >
                  <UserRoundCog className="h-5 w-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Users</TooltipContent>
          </Tooltip>
          {/* 
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/appointments">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Playground"
                                >
                                    <CalendarDays className="h-5 w-5" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Appointments</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/products">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Playground"
                                >
                                    <Package className="h-5 w-5" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Products</TooltipContent>
                    </Tooltip>             
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Playground"
                                >
                                    <LineChart className="h-5 w-5" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Analytics</TooltipContent>
                    </Tooltip> */}
        </TooltipProvider>
      </nav>
      {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/settings">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Playground"
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav> */}
    </aside>
  );
};
