// import { useEffect } from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { getBoxs, getMyNFTs, getOpenBoxPrice, openBox } from "../util/interact";
import ListCards from "./ListCards";
import ListBoxs from "./ListBoxs";
import { formatRes } from "../util/func";
import { canOpenBox } from "../util/interact";


function MyNFT() {

    const initialItem = {
        _tokenName: "test_name",
        _tokenId: 1,
        _tokenImg: "http://www.w3.org/2000/svg",
        _seller: "seller_address",
        _owner: "onwer_address",
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
    const [listNFTs, setListNFTs] = useState([initialItem]);
    const [listBoxs, setListBoxs] = useState([]);


    useEffect(() => {
        async function fetchMyBoxs() {
            const res = await getBoxs();
            setListBoxs(formatRes(res));
        }
        fetchMyBoxs();
    }, []);

    useEffect(() => {
        async function fetchMyNFTs() {
            const res = await getMyNFTs();
            setListNFTs(formatRes(res));
        }
        fetchMyNFTs();
        console.log(listNFTs);
    }, []);
    const clickOpen = async (id, targetBox) => {
        const openBoxFee = await getOpenBoxPrice();
        const canOpen = await canOpenBox(targetBox);
        if (canOpen) {
            await openBox(id, ethers.utils.formatUnits(openBoxFee, "wei"));
        }
    }


    return (
        <>
            <ListCards
                listItem={listNFTs}
                myNFT={true}
                title={"My NFTs"}
            />
            <ListBoxs
                listItem={listBoxs}
                myNFT={true}
                title={"My Boxs"}
                clickOpen={clickOpen}
            />
        </>

    );

}
export default MyNFT;