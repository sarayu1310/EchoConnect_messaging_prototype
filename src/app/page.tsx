import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";
import { useTheme } from "next-themes";

export default function Home() {
	return (
		<main className=''>
			<div className='flex overflow-y-hidden h-[calc(100vh)] max-w-[1700px] mx-auto bg-left-panel'>
				{/* Green background decorator for Light Mode */}
				<div className='fixed top-0 left-0 w-full h-36 bg-[#DF2DA8] dark:bg-transparent -z-30' />
				<LeftPanel />
				<RightPanel />
			</div>
		</main>
	);
}