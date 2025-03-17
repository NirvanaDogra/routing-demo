export default function Reviews({ params }: { params: { productId: string } }) {
    return (
        <h1> This is the reviews page at '/products/{params.productId}/reviews'</h1>
    );
}