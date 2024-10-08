import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/ui-comp/theme-provider";
import ConvexClientProvider from "@/ui-comp/convex-client-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'EchoConnect',
  description: 'Echo your thoughts with EchoConnect!',
  icons: {
    icon: '/logo.png', 
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<ConvexClientProvider>
						{children}
						<Toaster />
					</ConvexClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}