export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log(params);
    if (params.slug.length === 2) {
        return (<div>
            Viewig docs for feature  {params.slug[0]} and concept {params.slug[1]}
        </div>)
    } else if (params.slug.length === 1) {
        return (<div>
            Viewig docs for feature  {params.slug[0]}
        </div>)
    } else {
        return (<div>
            Home page for /doc
        </div>)
    }
}