import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("size-14 bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-xl text-neutral-950 font-medium", className)} {...otherProps}>
            {children}
        </div>
    );
};

export default Key;