"use client"
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }  : {children : ReactNode}) {
    const router = useRouter();
    return (
        <SessionProvider>
           <NextUIProvider 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    navigate={router.push} 
                    className="h-full w-full flex flex-col" >
                <NextThemesProvider attribute="class" >
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </SessionProvider>
    )
}