import Categories from "/app/header/categories/page.jsx";
import ShoppingCard from "/app/header/shoppingcard/page.jsx";


export default async function Header() {
    return (
        <div className="header">
            <h1>ecommerce</h1>
            <Categories />
            <ShoppingCard />
        </div>
    )
}