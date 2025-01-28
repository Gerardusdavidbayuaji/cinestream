"use client";

import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
}
const Container = ({ children, className, ...others }: ContainerProps) => {
  return (
    <div className={`mb-10 p-4 md:p-8 container ${className}`} {...others}>
      {children}
    </div>
  );
};

export default Container;
