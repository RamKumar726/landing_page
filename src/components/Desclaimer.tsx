import React from "react";

export default function Disclaimer() {
  return (
    <div className="">
      {/* Heading Section */}
      <div className="text-center">
        <div className="flex justify-center items-center w-full px-4">
          <h1 className="text-primary text-3xl lg:text-4xl font-bold flex items-center gap-4">
            <span className="w-12 h-1.5 bg-primary rounded-full"></span>
            Disclaimer
            <span className="w-12 h-1.5 bg-primary rounded-full"></span>
          </h1>
        </div>
      </div>

      {/* Disclaimer Content */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-white p-8 rounded-lg shadow-lg text-gray-700 text-left">
          <p className="mb-6">
            Please be aware that this game may be habit-forming and carry financial risks. We urge you to play responsibly.
          </p>
          <p className="mb-6">
            <strong>Notout Games PVT LTD</strong> retains all rights to the assets, content, services, information, products, and graphics presented on this website—excluding any third-party content.
          </p>
          <p className="mb-6">
            <strong>Notout Games PVT LTD</strong> does not guarantee the accuracy, completeness, reliability, or adequacy of any third-party content found on this site. All materials—including text, graphics, and links—are provided <strong>"AS IS"</strong> without any express or implied warranties.
          </p>
          <p className="mb-6">
            <strong>CRICOP</strong>, developed by Notout Games PVT LTD, is an opinion trading platform intended for users aged <strong>18 and over</strong>. Access to CRICOP is available only in regions where permitted by law; therefore, users in certain areas may not be able to access our platform or participate in its contests. For an updated list of eligible regions, please refer to our app.
          </p>
          <p className="text-center text-sm text-gray-500 mt-8">
            Copyright © – <strong>Notout Games PVT LTD</strong> | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}