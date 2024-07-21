"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPlus } from "react-icons/fi";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="fixed z-50 md:hidden block bottom-4 right-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-4xl bg-[#FFBA00] text-white rounded-full p-2">
          <FiPlus />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-3">
          <DropdownMenuLabel className="text-[#80A948] text-base">
            <span>demo@gmail.com</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-base border-b-[1px] border-[#FFBA00]">
            <Link
              href="/#service-section"
              className={`${
                pathname === "/#service-section" ? "underline" : ""
              }`}
            >
              Services
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base border-b-[1px] border-[#FFBA00]">
            <Link
              href="/#media-section"
              className={`link ${
                pathname === "/#media-section" ? "underline" : ""
              }`}
            >
              Media
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base border-b-[1px] border-[#FFBA00]">
            <Link
              href="/#ads-section"
              className={`link ${
                pathname === "/#ads-section" ? "underline" : ""
              }`}
            >
              Cases
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base border-b-[1px] border-[#FFBA00]">
            <Link
              href="/#faq-section"
              className={`link ${
                pathname === "/#faq-section" ? "underline" : ""
              }`}
            >
              FAQ
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base border-b-[1px] border-[#FFBA00]">
            <Link
              href="/#contact-section"
              className={`link ${
                pathname === "/#contact-section" ? "underline" : ""
              }`}
            >
              Contacts
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
