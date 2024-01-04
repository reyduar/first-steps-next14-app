import { Metadata } from "next/types";

export default function About() {
  return (
    <><span className="text-5xl">About</span></>
  )
}


export const metadata: Metadata = {
 title: 'About',
 description: 'Author information',
  keywords: ['Ariel Duarte', 'About', 'Next.js', 'TypeScript'],
};