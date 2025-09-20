import React from "react";
import FadeInOnScroll from "./FadeIn";
import Dialog from "./Dialog";
import { Expand } from "lucide-react";

function Feature({
  content,
  description,
  title,
}: {
  content: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <FadeInOnScroll className=" px-2 pt-6 hover:bg-black/10 transition-all mt-8 border-t border-t-black/40 ">
      <Dialog description={description} title={title}>
        <div className="  flex w-full justify-between items-start mb-2 ">
          <div className="text-4xl ">{title}</div>
          <div className=" rounded-full text-white bg-main p-3">
            <Expand className=" size-4" />
          </div>
        </div>
        <div className="text-xl text-black/70 font-secondary mb-4 ">{description.slice(0, 140)}...</div>
        {content}
      </Dialog>
    </FadeInOnScroll>
  );
}

export default Feature;
