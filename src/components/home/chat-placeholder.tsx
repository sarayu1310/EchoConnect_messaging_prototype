import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
	return (
		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
			<div className='flex flex-col items-center w-full justify-center py-10 gap-2'>
				<Image src={"/desktop-cover.png"} alt='Hero' width={400} height={280} />
				<p className='text-3xl font-extralight mb-2'>Echo your thoughts with EchoConnect!</p>
				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground'>
					Make calls, share your screen and get a faster experience.
				</p>
			</div>
		</div>
	);
};
export default ChatPlaceHolder;