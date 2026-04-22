"use client";
import React, { useState } from "react";
import Link from "next/link";

type OrgNode = {
  name: string;
  level: number;
  href?: string;
  child?: OrgNode[];
};

const defaultData: OrgNode = {
  name: "home",
  level: 0,
  child: [{
    name: "새 항목",
    level: 1,
    href: "/announcement",
    child: []
  }]
};

export default function OrgChart() {
  const [orgTreeData] = useState<OrgNode>(defaultData);

  return (
    <div className="flex flex-col items-center my-0 py-0 w-full overflow-x-auto">
      <div className="min-w-fit px-0">
        <OrgNodeComponent node={orgTreeData} />
      </div>
    </div>
  );
}

type orgNodeComponentProps = {
  node: OrgNode;
}

const OrgNodeComponent = ({ node }: orgNodeComponentProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Link 
        href={node.href || "/"}
        className="w-48 h-14 px-6 text-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] flex justify-center items-center rounded-md cursor-pointer hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:bg-orange-50 transition-all duration-200"
      >
        {node.name}
      </Link>
      {node.child?.map((child: OrgNode, index) => {
        return <Link key={index} href={child.href || "/"} className="w-48 h-14 px-6 text-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] flex justify-center items-center rounded-md cursor-pointer hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:bg-orange-50 transition-all duration-200">
          {child.name}
        </Link>
      })}
    </div>
  );
}