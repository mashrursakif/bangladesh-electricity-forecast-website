import { Urbanist, Geist_Mono } from 'next/font/google';
import './globals.css';

const fontPrimary = Urbanist({
	variable: '--font-primary',
	subsets: ['latin'],
});

// const fontSecondary = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata = {
	title: 'Bangladesh Electricity Forecast',
	description:
		'Predicting electricity generation and loadshed in Bangladesh using machine learning models',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${fontPrimary.variable} antialiased`}>{children}</body>
		</html>
	);
}
