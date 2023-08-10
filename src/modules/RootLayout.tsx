import { Outlet } from "react-router-dom";
import LinkLayout from "../components/LinkLayout";
import SideLayout from "../components/SideLayout";

export const RootLayout = () => {
	return (
		  <main className="bg-black flex flex-col min-h-screen min-w-screen font-radnika">
			<LinkLayout />
			<div className="sm:flex flex-1 h-full">
			  <SideLayout />
			  <div className="w-full justify-center items-center flex mt-10 px-2 pb-10">
				<Outlet />
			  </div>
			</div>
		  </main>
	  );
}