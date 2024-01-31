import "./globals.css"
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"
import type { Metadata } from "next"
import CookieBanner from "@/app/components/CookieBanner"
import GoogleAnalytics from "./components/GoogleAnalytics"
export const metadata: Metadata = {
	title: "Albison Academy",
	icons: {
		icon: "/logo.svg",
	},
	description:
		"Toshkentda professional IT treyning markazi | Albison - 2020 yildan beri o'z faoliyatini yurg'izib kelmoqda. IT Kurslar boshidan boshlab o'rgatiladi va ishga kirguncha qo’llab-quvvatlanadi. Online o'qish imkoniyati ham bor. Bepul ochiq darslar",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html>
				<head>
					<GoogleAnalytics GA_MEASUREMENT_ID="G-93WN9M8Y8G" />
					<link rel="icon" href="/logo.svg" />
				</head>
				<body>
					<Navbar />
					{children}
					<Footer />
					<CookieBanner />
				</body>
			</html>
		</>
	)
}
