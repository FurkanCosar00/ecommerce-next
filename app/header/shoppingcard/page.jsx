import Image from "next/image";

export default function ShoppingCard() {
    return (
        <div className="shoppingSection">
            <Image src={"/public/images/yourCard.png"} width={50} height={50} alt={"cart"}></Image>
            <Image src={"/public/images/profilePicture.png"} width={50} height={50} alt={"pfp"}></Image>
        </div>
    )
}