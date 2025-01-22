import React from "react";

interface BannerProps{
  banner : String
}


export default function Banner({banner}:BannerProps) {
  return (
    <div className="w-full h-96 overflow-hidden">
      <img 
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
