import { createContext, ReactNode, useContext, useState } from "react";
interface SignUpData {
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  securityQuestion?: string;
  securityAnswer?: string;
}

interface SignUpContextType {
  signUpData: SignUpData;
  updateSignUpData: (data: Partial<SignUpData>) => void;
  resetSignUpData: () => void;
}

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [signUpData, setSignUpData] = useState<SignUpData>({});
  const updateSignUpData = (data: Partial<SignUpData>) => {
    setSignUpData((prev) => ({ ...prev, ...data }));
  };
  const resetSignUpData = () => {
    setSignUpData({});
  };
  return (
    <SignUpContext.Provider
      value={{ signUpData, updateSignUpData, resetSignUpData }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
export const useSignUp = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error("useSignUp must be used within SignUpProvider");
  }
  return context;
};
