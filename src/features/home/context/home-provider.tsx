"use client"

import { createContext, useState } from "react";

export const HomeContext = createContext({});

export default function HomeContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [hoveredLink, setHoveredLink] = useState<string | null>("");

    return <HomeContext.Provider value={{hoveredLink, setHoveredLink}}>{children}</HomeContext.Provider>
}
