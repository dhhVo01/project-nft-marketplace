import { useEffect, useState } from "react";
import { getMKPListedNFTs } from "../util/interact";
import ListCards from "./ListCards";
import { formatRes } from "../util/func";


function MarKetPlace() {
    const initialItem = {
        _tokenName: "test_name",
        _tokenId: 1,
        _tokenImg: "http://www.w3.org/2000/svg",
        _seller: "seller_address",
        _owner: "",
        _price: 1000,
        _isSelling: true,
        _tokenURIDetail: [
            {
                tokenId: 0,
                agentId: 0,
                isOnchain: 0,
                baseRarity: 0,
                rarity: 0,
                level: 0,
                damage: 0,
                hp: 0,
                evasion: 0,
                armor: 0,
                combo: 0,
                precision: 0,
                accuracy: 0,
                counter: 0,
                reversal: 0,
                lock: 0,
                disarm: 0,
                speed: 0

            }
        ]
    }
    const [listItem, setListItem] = useState([initialItem]);

    useEffect(() => {
        async function fetchMKP() {
            const res = await getMKPListedNFTs();
            setListItem(formatRes(res));
            console.log(res);
        }
        fetchMKP();
    }, []);
    // const clickBuy = async (boxType) => {
    //     // console.log(boxType, ethers.utils.formatUnits(listItem[boxType-1]._price, "wei"));
    //     await purchaseBox(boxType, ethers.utils.formatUnits(listItem[boxType-1]._price, "wei"));
    // };
    return(
        <ListCards
            listItem={listItem}
            title={"Market Place"}
            myNFT={false}
            isMKP={true}
        />
    );

}
export default MarKetPlace;