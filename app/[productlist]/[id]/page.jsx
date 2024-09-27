import Image from "next/image";
import ClientSideComponent from "/app/client.jsx";

export default async function PostDetail({ params }) {
    const { id } = params;
    console.log(id);

    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json();
    console.log(data.title)

    return (
        <div className="postDetailInside">
            <Image src={data.thumbnail} width={445} height={445} alt={data.thumbnail}></Image>

            <div className="postDetailDektop">
                <div className="postDetailTexts">
                    <p className="brand">{data.brand}</p>
                    <h3 className="title">{data.title}</h3>
                    <p className="description">{data.description}</p>
                </div>

                <div className="prices">
                    <p className="price">{"$" + data.price}</p>
                    <p className="discountPercentage">{data.discountPercentage + "%"}</p>
                    <p className="discount">{ ((data.price) / (1 - data.discountPercentage / 100)).toFixed(2) }</p>
                </div>

                <div className="buttons">
                    <ClientSideComponent stock={data.stock}/>

                    <button className="addToCart">
                        <Image src={"/public/images/button.png"} width={17} height={17} alt={"button"}></Image>
                        <p>Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
