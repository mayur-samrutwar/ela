import type {Metadata} from "next";
import "./globals.css";
import {BackgroundWave} from "@/components/background-wave";
import Link from "next/link";
import {RemainingCredits} from "@/components/RemainingCredits";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Ela",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={"h-full w-full"}>
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-10NHE5L6PV"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-10NHE5L6PV');
                    `}
                </Script>
            </head>
            <body className={`antialiased w-full h-full flex flex-col`}>
                <div className="flex flex-col flex-grow w-full items-center justify-center px-2 sm:px-4">
                    <nav className="fixed w-full top-0 left-0 grid grid-cols-2 py-2 sm:py-4 px-4 sm:px-8 bg-background/80 backdrop-blur-sm z-10">
                        <div className="flex">
                            <Link href="/" prefetch={true}>
                                <span className="text-lg sm:text-xl font-semibold">Ela</span>
                            </Link>
                        </div>
                        <div className="flex justify-end">
                            <RemainingCredits />
                        </div>
                    </nav>
                    {children}
                    <BackgroundWave/>
                </div>
            </body>
        </html>
    );
}
