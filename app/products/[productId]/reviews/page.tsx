import React from "react";

export default function Reviews({ params }: { params: Promise<{ productId: string }> }) {
    const {productId} = React.use(params)
    return (
        <h1> This is the reviews page at '/products/{productId}/reviews'</h1>
    );
}