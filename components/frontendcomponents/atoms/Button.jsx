import Link from "next/link";

const Button = ({
    children,
    className = "",
    href = "#",
    isTargetBlank = false
}) => {
    return (
        <Link href={href} className={className} target={isTargetBlank ? "_blank" : "_self"}>
            {children}
        </Link>
    );
};

export default Button;