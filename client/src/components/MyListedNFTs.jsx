import { useEffect, useState } from "react";
import { getMyListedNFTs } from "../util/interact";
import ListCards from "./ListCards";
import { formatRes } from "../util/func";
import { withdrawNFT } from "../util/interact";
import { getWithdrawPrice } from "../util/interact";


function MyListedNFTs() {
    const initialItem = {
        _tokenName: "test_name",
        _tokenId: 1,
        _tokenImg: "http://www.w3.org/2000/svg",
        _seller: "seller_address",
        _owner: "owner_address",
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
        async function fetchMyListedNFTs() {
            const res = await getMyListedNFTs();
            setListItem(formatRes(res));
        }
        fetchMyListedNFTs();
    }, []);
    const clickWithDraw = async (id) => {
        const withDrawFee = await getWithdrawPrice();
        await withdrawNFT(id, withDrawFee);
    };

    return(
        <ListCards
            listItem={listItem}
            title={"My Listed NFTs"}
            myNFT={false}
            myListedNFTs={true}
            isMKP={false}
            withDraw={clickWithDraw}
        />
    );

}
export default MyListedNFTs;