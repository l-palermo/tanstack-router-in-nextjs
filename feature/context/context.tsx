import { Outlet } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";

export * from "../screens/screen-one";
export * from "../screens/screen-two";

type SharedContextType =
  | {
      count: number;
      setCount: (val: number) => void;
      basePath: string;
    }
  | undefined;

const SharedContext = createContext<SharedContextType>(undefined);

export const useSharedContext = () => {
  const ctx = useContext<SharedContextType>(SharedContext);
  if (!ctx)
    throw new Error(
      "useSharedContext must be used within SharedContext Provider"
    );
  return ctx;
};

export function FeatureContext({ basePath }: { basePath: string }) {
  return function FeatureContextInner() {
    const [count, setCount] = useState(0);

    return (
      <SharedContext.Provider value={{ count, setCount, basePath }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingTop: 200,
            gap: 16,
            height: "100vh",
          }}
        >
          <h1>External Tan Stack Router Module</h1>
          <Outlet />
        </div>
      </SharedContext.Provider>
    );
  };
}
