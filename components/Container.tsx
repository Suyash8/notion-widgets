import { ContainerProps } from "./Types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[rgb(34,34,34)] rounded-xl m-8 p-8 shadow-md w-full max-w-[385px] min-w-[320px] aspect-85-100">
        {children}
      </div>
    </div>
  );
};

export default Container;
