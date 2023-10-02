import { ReactNode } from "react";

export default function Box(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-[50px] bg-[#202020] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
