"use client";

import React from "react";
import { authConfig } from "@/app/configs/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <div className="flex items-top  mt-[60px]">
        <div className="border-[10px] border-primary inline-block w-[250px] h-[250px]">
          {session?.user?.image && (
            <img className="w-full h-full" src={session.user.image} alt="" />
          )}
        </div>
        <div className="text-primary ml-[80px]">
          <h1 className="text-xl mb-[45px]">ПЕРСОНАЛЬНАЯ СТАТИСТИКА</h1>
          <div className="flex ">
            <div className="text-[20px] font-involveRG w-auto mr-[120px]">
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество игр</p>
                <p className="ml-[40px]">4444</p>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество побед</p>
                <p className="ml-[40px]">4444</p>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество поражений</p>
                <p className="ml-[40px]">4444</p>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество замечаний</p>
                <p className="ml-[40px]">4444</p>
              </div>
            </div>
            <div className="text-[20px] font-involveRG w-auto ml-[120px]">
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество игр за красных</p>
                <p className="ml-[40px]">4444</p>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество красных побед</p>
                <p className="ml-[40px]">4444</p>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество игр за черного</p>
                <p className="ml-[40px]">4444</p>
              </div>
              <div className="flex items-center justify-between mb-[30px]">
                <p>Количество черных побед</p>
                <p className="ml-[40px]">4444</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
