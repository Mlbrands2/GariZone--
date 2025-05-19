import { routes } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { HeartIcon, MenuIcon } from "lucide-react";
import { getSourceId } from "@/lib/source-id";
import { redis } from "@/lib/redis-store";
import { Favourites } from "@/config/types";
import { navLinks } from "@/config/constants";



export const PublicHeader = async () => {
  const sourceId = await getSourceId();
  const favourites = await redis.get<Favourites>(sourceId ?? "");

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white shadow-md">
      {/* Logo and Title */}
      <Link href={routes.home} className="flex items-center gap-3">
        <Image
          width={50}
          height={50}
          alt="GariZone Logo"
          src="/logo.png"
          className="rounded-full object-contain"
        />
        <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
          GariZone <span className="text-2xl">🚗✨</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="font-semibold uppercase text-base text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Favourites Button */}
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="relative inline-block group"
        aria-label="View favourites"
      >
        <Link href={routes.favourites}>
          <div className="flex group-hover:bg-pink-500 duration-200 transition-colors ease-in-out items-center justify-center w-10 h-10 bg-muted rounded-full">
            <HeartIcon className="w-6 h-6 text-primary group-hover:text-white group-hover:fill-white" />
          </div>
          <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 text-white bg-pink-500 rounded-full group-hover:bg-primary">
            <span className="text-xs">
              {favourites?.ids.length ?? 0}
            </span>
          </div>
        </Link>
      </Button>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="link" className="p-0" aria-label="Toggle navigation menu">
              <MenuIcon className="w-6 h-6 text-primary" />
              <SheetTitle className="sr-only">Toggle nav menu</SheetTitle>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white w-full max-w-xs p-4">
            <nav className="grid gap-4">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="text-base font-medium text-gray-800 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
