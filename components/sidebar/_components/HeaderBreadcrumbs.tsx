"use client"

import { HomeIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";

const HeaderBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "").filter((item) => item !== "admin")


  return (
    <Breadcrumb>
      <BreadcrumbList >
        <BreadcrumbItem>
          <BreadcrumbLink asChild >
            <Link href="/admin" >
              Admin
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((item, index) => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link href={`/admin/${item}`} className="flex items-baseline">
                  {capitalizeFirstLetter(item)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default HeaderBreadcrumbs