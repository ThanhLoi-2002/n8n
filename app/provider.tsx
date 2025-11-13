"use client";

import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "./_context/AuthContext";

interface Props {
  children: ReactNode;
}
export const Provider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user: any) => {
      // setUser(user);

      if (user) {
        // setUser(result)
      }
    });
    return () => unsubcribe();
  }, []);
  return (
    <AuthContext.Provider value={user}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
