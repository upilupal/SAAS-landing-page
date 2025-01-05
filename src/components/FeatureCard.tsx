import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { twMerge } from "tailwind-merge";

const FeatureCard = (props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    const { title, description, children, className} = props;
    return (
        <Card className={twMerge("bg-neutral-900 border-white/10", className)}>
            <CardHeader className="aspect-video">{children}</CardHeader>
            <CardContent>
                <h3 className="text-white text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
