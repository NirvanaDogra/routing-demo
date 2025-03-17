import { notFound } from "next/navigation";
export default function ReviewDetails({params}: {params: { productId: string, reviewId: string}}) {
    if(params.productId === '1' && params.reviewId === '1') {
        notFound();
    }
    return (
        <h1> This is the review details page at '/products/{params.productId}/reviews/{params.reviewId}'</h1>
    );
}