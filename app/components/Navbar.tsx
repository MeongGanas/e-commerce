"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Nav({
  actionLabel,
  actionUrl,
}: {
  actionLabel: string;
  actionUrl: string;
}) {
  return (
    <>
      <Navbar className="sticky text-white" isBlurred={false}>
        <NavbarContent>
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit">
              Commerce
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center">
          <NavbarItem className="w-80 md:w-96 hidden sm:block">
            <SearchBar />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href={actionUrl} className="text-white">
              {actionLabel}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/register"
              variant="flat"
              className="bg-white text-black"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar className="sticky sm:hidden">
        <NavbarContent className="w-full">
          <SearchBar />
        </NavbarContent>
      </Navbar>
    </>
  );
}

function SearchBar() {
  return (
    <form action="" className="w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full ps-10 py-3 text-sm border bg-transparent border-gray-300 rounded-lg"
          placeholder="Search something here..."
          required
        />
      </div>
    </form>
  );
}
