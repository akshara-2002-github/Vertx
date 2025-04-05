import React from "react";

const CompanyCard = ({
  logo,
  companyName,
  foundedInfo,
  description,
  role = "CEO",
  roleColor = "bg-green-500",
}) => {
  return (
    <div className="flex flex-row w-full items-start mt-[10px]">
      <div className="w-[32.91px] h-[29.77px] bg-white rounded-[5px] mt-[5px]">
        {/* Optional logo */}
        {logo && <img src={logo} alt="logo" className="w-full h-full object-cover rounded-[5px] m"  />}
      </div>

      <div className="flex flex-col ml-[10px]">
        <div className="flex flex-row items-center">
          <h1 className="text-[14px] text-white">{companyName}</h1>
          <div className={`ml-[10px] text-white rounded-[2px] px-[5px] py-[1px] text-[8px] text-white ${roleColor} mr-[240px]`}>
            {role}
          </div>
        </div>

        {foundedInfo && <h1 className="text-[10px] text-white">{foundedInfo}</h1>}
        {description && <h1 className="text-[10px] text-white">{description}</h1>}
      </div>

      <div className="text-[8px] ml-auto text-white">View Profile</div>
    </div>
  );
};

export default CompanyCard;
