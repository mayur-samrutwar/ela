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
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-KGDWGDSQ');
                    `}
                </Script>
            </head>
            <body className={`antialiased w-full h-full flex flex-col`}>
                <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KGDWGDSQ"
                        height="0" 
                        width="0" 
                        style={{display: 'none', visibility: 'hidden'}}
                    />
                </noscript>
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
