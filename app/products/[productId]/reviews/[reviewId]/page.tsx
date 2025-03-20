'use client'
import { notFound } from "next/navigation";
import { use } from "react";
export default function ReviewDetails({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = use(params);
    if (productId === '1' && reviewId === '1') {
        notFound();
    }
    function getRandomInt(count: number): number {
        return Math.floor(Math.random() * count)
    }

    const random = getRandomInt(2)
    try {
        if (random === 1) {
            throw new Error("erro random == 1")
        }
    } catch (err) {
        throw new Error("erro random == 1")
    }
   
    return (
        <h1> This is the review details page at '/products/{productId}/reviews/{reviewId}'</h1>
    );
}