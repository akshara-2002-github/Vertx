import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import SideBar from '../../components/SideBar/index.jsx';
import CompanyCard from '../../components/CompanyCard/index.jsx';

import Person from "../../assets/person.svg";
import Entrepreneur from "../../assets/entrepreneur.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Gmail from "../../assets/gmail.svg";

const Accounts = () => {
  const companies = ["Company 1", "Company 2", "Company 3"];

	return (
		<div class="flex flex-row w-full h-full bg-black border-[#080808] border-solid">
			<SideBar />
			<div class="w-full h-full bg-black border-[#080808] border-solid overflow-scroll">
				<NavigationBar />
				<div class="w-full bg-[#1D1D1D] border-[#1D1D1D] border-solid px-9 py-8 h-full">
					<p class="text-white text-[24px] leading-[30px] font-bold mb-8">
						Account info
					</p>
					<div className="flex flex-row w-full mt-[32px] border border-[#272727] rounded-[10px] p-[40px] bg-black">
						<img src={Person} className="w-[80px] h-[80px] mt-[20px]" />
						<div className="flex flex-col ml-[50px]">
							<h1 class="text-white">Mr A</h1>
							<p class="text-white my-[5px]">Co-Founder & CEO @Vertx</p>
							<img src={Entrepreneur} className="w-[72.4px] h-[13.89px]" />
							<div className="flex flex-row mt-[30px] space-x-4">
								<img src={LinkedIn} className="w-[31.3px] h-[31.3px]" />
								<img src={Twitter} className="w-[31.3px] h-[31.3px]" />
								<img src={Gmail} className="w-[31.3px] h-[31.3px]" />
							</div>
						</div>
					</div>

					{/* Stats & Experience */}
					<div className="flex flex-row w-full mt-[20px]">
						<div className="flex flex-col mr-[20px] p-[20px] border border-[#272727] rounded-[10px] bg-black">
							<h1 className="font-manrope font-bold text-[18px] leading-[100%] text-white">
								Founded Companies
							</h1>
							<h1 className="font-manrope font-bold text-[64px] leading-[100%] mt-[10px] text-white">
								02
							</h1>

							{/* Example company cards */}
							<CompanyCard
								companyName="Vertx"
								foundedInfo="Founded in 2025. in Fintech."
								role="CEO"
								roleColor="bg-green-500"
							/>
							<CompanyCard
								companyName="Company"
								description="Details/Information like acquired /exit/m&a"
								role="PROPRIETOR"
								roleColor="bg-indigo-400"
							/>
						</div>

						<div className="flex flex-col p-[20px] border border-[#272727] bg-black rounded-[10px]">
							<h1 className="font-manrope font-bold text-[20px] leading-[100%] text-white">
								Experience
							</h1>
							<h1 className="font-manrope font-bold text-[64px] mt-[10px] leading-[100%] text-white">
								03
							</h1>
							<div className="mt-[15px]">
								{companies.map(company => (
									<CompanyCard key={company} companyName={company} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accounts;
