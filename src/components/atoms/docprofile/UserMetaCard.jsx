"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UserMetaCard() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSave = () => {
    console.log("Saving changes...");
    setIsOpen(false);
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          {/* Profile + Social Links */}
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            {/* Avatar */}
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <Image
                width={80}
                height={80}
                src="/assets/images/user.png"
                alt="user"
              />
            </div>

            {/* User Info */}
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                Musharof Chowdhury
              </h4>
              {/* <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team Manager
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Arizona, United States
                </p>
              </div> */}
            </div>

          </div>

       
        </div>
      </div>

    </>
  );
}
