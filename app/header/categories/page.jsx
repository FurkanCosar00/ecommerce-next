import Link from "next/link";

export default async function Categories() {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json();

    const allCategories = data.products.map(x => x.category);
    const filteredCategories = [...new Set(allCategories)]

    return (
        <div className="categories">
            <ul>
                {filteredCategories.map((productlist, i) => 
                    <li key={i}>
                        <Link className="categoryLinks" href={`/${productlist}`}>{productlist}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}