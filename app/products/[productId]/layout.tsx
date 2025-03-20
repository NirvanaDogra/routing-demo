import React from "react";

export default function PageDetailsLayout({ children, }: { children: Readonly<React.ReactNode> }) {
    return (
        <>

            {children}
            <div style={{ backgroundColor: "red" }}>
                <p>* these are the t&c for all the products <em>from layout in review</em></p>
            </div >
        </>
    );

}