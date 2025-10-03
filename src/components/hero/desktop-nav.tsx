import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: Props) {
  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/" className="flex items-center">
        {/* <Image
          src="/yachay.svg"
          alt="logo"
          width={30} // ajusta a tu gusto
          height={30}
        /> */}
        <span className="text-xl leading-[1.1] font-medium tracking-tight sm:text-2xl">
          Yachay
        </span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button asChild>
        <Link href="/pricing">Únete Ahora</Link>
      </Button>
    </nav>
  );
}
