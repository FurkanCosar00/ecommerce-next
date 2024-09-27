import Image from "next/image";

export default function ShoppingCard() {
    return (
        <div className="shoppingSection">
            <Image src={"/images/yourCard.png"} width={20} height={20} alt={"cart"}></Image>
            <Image src={"/images/profilePicture.png"} width={50} height={50} alt={"pfp"}></Image>
        </div>
    )
}