import React, { useState } from "react";
import logo from "../assets/images/trendzlogo.png";
import makeBlockie from "ethereum-blockies-base64";
import Web3 from "web3";
import { Button, Avatar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './sidebar.css'; // Import custom CSS for hover effects

const Sidebar = () => {
    const [account, setAccount] = useState(null);
    const [balance] = useState('200,000'); // Hardcoded TRB balance

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                // No need to fetch balance since it's hardcoded
            } catch (error) {
                console.error("Connection to Metamask failed", error);
            }
        } else {
            alert("Please install Metamask!");
        }
    };

    const shortenAddress = (address) => {
        return `${address.slice(0, 4)}...${address.slice(-4)}`;
    };

    return (
        <div
            className="h-[80px] w-full top-0 flex items-center px-8 text-white"
            style={{ fontFamily: 'Changa, sans-serif', backgroundColor: '#242526' }}
        >
            <div className="flex items-center">
                <img src={logo} className="h-16 w-16" alt="Trendz Logo" />
                <p className="ml-4 text-xl">TRENDZ</p>
            </div>
            <div className="flex flex-1 justify-center space-x-8">
                <HomeIcon className="hover-icon" fontSize="medium" />
                <SearchIcon className="hover-icon" fontSize="medium" />
                <StorefrontIcon className="hover-icon" fontSize="medium" />
                <NotificationsIcon className="hover-icon" fontSize="medium" />
                <AccountCircleIcon className="hover-icon" fontSize="medium" />
            </div>
            <div className="flex items-center space-x-8">
                {account ? (
                    <div className="flex items-center space-x-2">
                        <Avatar src={makeBlockie(account)} alt="Avatar" />
                        <div className="flex flex-col">
                            <span>{shortenAddress(account)}</span>
                            <Typography variant="body2" style={{ color: '#FFD700' }}>
                                {balance} TRB
                            </Typography>
                        </div>
                    </div>
                ) : (
                    <Button variant="contained" color="primary" onClick={connectWallet}>
                        Connect Wallet
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
