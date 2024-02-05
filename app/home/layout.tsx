import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar
        pfp={session.user?.image || ""}
        username={session.user?.name || ""}
        email={session.user?.email || ""}
      />
      <main className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">
        {children}
      </main>
    </>
  );
}
