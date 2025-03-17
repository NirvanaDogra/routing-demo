export default function ProductDetails({ params }: { params: { productId: string } }) {
    console.log(params);
    return (
        <div>
            <h1>Product details {params.productId}</h1>
        </div>
    )
}