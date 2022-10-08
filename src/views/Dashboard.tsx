import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import ConnectButton from "../components/ConnectWallet";
import logo from '../assets/et_new_logo.png'
import { useParams } from "react-router-dom";

type WalletProps = {
  Tezos: TezosToolkit;
  setContract: Dispatch<SetStateAction<any>>;
  setWallet: Dispatch<SetStateAction<any>>;
  userAddress: string;
  beaconConnection: boolean;
  setStorage: Dispatch<SetStateAction<any>>;
  setUserAddress: Dispatch<SetStateAction<string>>;
  setUserBalance: Dispatch<SetStateAction<number>>;
  setBeaconConnection: Dispatch<SetStateAction<boolean>>;
  wallet: BeaconWallet;
};

const navbarMenu = [
  {
    player: "alpha-test",
    imageUrl: "https://ipfs.io/ipfs/QmaLQJCQ2HW514EUpzRfwKa7GuhFxXAHXKXgj9rxyZ26m1/",
  },
  {
    player: "burnt",
    imageUrl: "https://ipfs.io/ipfs/QmZ7DbkrLinWghpbDw2Ebn3FvJfPAn6yrJWjzkDe2bUxib/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=",
  },
];


const Dashboard = ({
  Tezos,
  setContract,
  setWallet,
  setUserAddress,
  setStorage,
  userAddress,
  beaconConnection,
  setUserBalance,
  setBeaconConnection,
  wallet
}: WalletProps): JSX.Element => {
  const [url, setUrl] = useState<string>('https://ipfs.io/ipfs/QmZ7DbkrLinWghpbDw2Ebn3FvJfPAn6yrJWjzkDe2bUxib/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=');
  const param = useParams();
  console.log("param", param.playerName)
  const result = navbarMenu.find(item => item.player == param.playerName)
  console.log("result", result)
  useEffect(()=>{
    console.log("hello")
    setUrl(`https://ipfs.io/ipfs/QmZ7DbkrLinWghpbDw2Ebn3FvJfPAn6yrJWjzkDe2bUxib/?creator=tz1cpiv1qgjzNsMbqHYyUdH8XzZ672bjdm2E&objkt=781875&viewer=${userAddress}`)
  }, [beaconConnection])
  return (
    <div className="max-w-5xl mx-auto h-screen py-12">
      <div className="bg-white py-2 flex items-center px-12 justify-between">
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-10 text-white">
          <img src={logo} alt="logo" className="w-16 h-10"/>
          </ul>
        </div>
        <ConnectButton
          Tezos={Tezos}
          setContract={setContract}
          setWallet={setWallet}
          setUserAddress={setUserAddress}
          setUserBalance={setUserBalance}
          setStorage={setStorage}
          userAddress={userAddress}
          beaconConnection={beaconConnection}
          setBeaconConnection={setBeaconConnection}
          wallet={wallet}
        />
      </div>
      <div className="">
        <iframe src={url} className="w-full h-iframe"></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
