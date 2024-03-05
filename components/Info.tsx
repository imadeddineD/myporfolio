"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { CgWebsite, CgYoutube } from "react-icons/cg";

interface InfoProps {
  data: any
};

const Info: React.FC<InfoProps> = ({ data }) => {
 

  return ( 
    <div>
      {/* <h1 className="text-3xl font-bold text-gray-900">{data?.title}</h1> */}
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <h3 className="font-bold text-black text-[20px]">Description :</h3>
        <div className="flex items-center gap-x-4">
          <div>
            {data?.descriptionLong}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Link 
         href={`${data?.youtube}`}
         target="_blank"
         className="flex items-center gap-x-2 px-2 py-1 bg-red-600 text-white rounded-md text-sm font-semibold">
          Youtube
          <CgYoutube size={20} />
        </Link>
        <Link 
         href={`${data?.github}`}
         target="_blank"
         className="flex items-center gap-x-2 px-2 py-1 bg-[#333] text-white rounded-md text-sm font-semibold">
          Github
          <BsGithub size={20} />
        </Link>
        {data?.link !== "" ? (<Link 
         href={`${data?.link}`}
         target="_blank"
         className="flex items-center gap-x-2 px-2 py-1 bg-blue-700 text-white rounded-md text-sm font-semibold">
          Website
          <CgWebsite size={20} />
        </Link>) : null}
      </div>
    </div>
  );
}
 
export default Info;