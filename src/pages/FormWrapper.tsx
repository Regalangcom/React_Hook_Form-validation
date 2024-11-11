import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ children, title }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-center text-blue-600 font-bold text-3xl">{title}</h2>
      <div>{children}</div>
    </>
  );
}
