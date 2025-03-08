"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center h-16 px-4">
        <div className="flex-1 flex justify-start">
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
        </div>
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          <Link
            href="/products"
            className="text-sm font-medium hover:text-primary transition-all hover:scale-[1.2]"
          >
            Products
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium hover:text-primary transition-all hover:scale-[1.2]"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-primary transition-all hover:scale-[1.2]"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-all hover:scale-[1.2]"
          >
            Contact
          </Link>
        </nav>
        <div className="flex-1 flex items-center gap-4 justify-end">
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <Button variant="default" size="sm">
                Sign in
              </Button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </div>
  );
}
