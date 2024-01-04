"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export default function ActiveLink({ path, label }: Props) {
  const pathName = usePathname(); // usePathname() solo se usar en el cliente y no en el server component
  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {label}
    </Link>
  );
}
