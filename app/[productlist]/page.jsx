import Link from "next/link";
import Image from "next/image";

export default async function PostDetail({ params }) {
    const { productlist } = params;
    console.log(productlist);

    const response = await fetch(`https://dummyjson.com/products/category/${productlist}`)
    const data = await response.json();

    return (
        <div className="postDetail">
            {data.products.map((x, i) => (
                <div className="listItem" key={i}>
                    <Image src={x.thumbnail} width={375} height={300} alt={x.thumbnail}></Image>
                    <div className="itemText">
                        <p className="itemTitle">{x.title}</p>
                        <p className="itemDescription">{x.description}</p>
                        <Link className="detailLink" href={`/${productlist}/${x.id}`}>detay sayfası</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}