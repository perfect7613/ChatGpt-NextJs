'use client'

type Props = {
    children: React.ReactNode;
    session: Session | null;
}


import { Session } from "next-auth";
import {SessionProvider as Provider} from "next-auth/react";

export function SessionProvider({children, session}: Props){
    return (
        <Provider>
            {children}
        </Provider>
    )
}