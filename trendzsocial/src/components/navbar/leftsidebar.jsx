import React from "react";
import { Box, Typography, Avatar, Button } from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import logo from '../assets/images/trendzlogo.png';
import "./leftsidebar.css"

function LeftSideBar() {
    const walletAddress = "0x1234...abcd";
    const trbBalance = "100 TRB";
    const user = {
        username: "J-Ben",
        gender: "male",
        age: 28,
        location: "New York, USA",
        popularityLevel: 3,
        following: 150,
        followers: 2000,
    };

    return (
        <Box style={{ fontFamily: 'Changa, sans-serif', borderRadius: '12px', color: 'white', padding: '20px', minHeight: '100vh' }}>
            {/* Profile Section */}
            <Box mb={3} p={2} style={{ backgroundColor: '#18191A', borderRadius: '12px', marginTop: '20px', border: '1px solid #2f3336' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={logo} alt="Profile" sx={{ width: 64, height: 64 }} />
                    <Box mt={2}>
                        <Typography variant="h6" align="center" style={{ fontFamily: 'Changa, sans-serif' }}>
                            {user.username}
                        </Typography>

                        <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                            {user.gender === 'male' ? <MaleIcon style={{ color: '#1E90FF' }} /> : <FemaleIcon style={{ color: '#FF69B4' }} />}
                            <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} ml={1}>{user.age} years, {user.location}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box mt={2}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="center">Popularity Level: Level {user.popularityLevel}</Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="center">Following: {user.following}</Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="center">Followers: {user.followers}</Typography>
                </Box>
            </Box>

            {/* Trending Topics Section */}
            <Box mb={3} p={2} style={{ backgroundColor: '#18191A', borderRadius: '12px', border: '1px solid #2f3336' }}>
                <Typography variant="h6" align="left" style={{ fontFamily: 'Changa, sans-serif' }} mb={2}>Trending Topics</Typography>
                <Box style={{ padding: '10px 0', borderBottom: '1px solid #2f3336' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">#Blockchain</Typography>
                </Box>
                <Box style={{ padding: '10px 0', borderBottom: '1px solid #2f3336' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">#Web3</Typography>
                </Box>
                <Box style={{ padding: '10px 0' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">#NFT</Typography>
                </Box>
            </Box>

            {/* Trending Users Section */}
            <Box mb={3} p={2} style={{ backgroundColor: '#18191A', borderRadius: '12px', border: '1px solid #2f3336' }}>
                <Typography variant="h6" align="left" style={{ fontFamily: 'Changa, sans-serif' }} mb={2}>Trending Users</Typography>
                <Box style={{ padding: '10px 0', borderBottom: '1px solid #2f3336' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">@cryptoqueen</Typography>
                </Box>
                <Box style={{ padding: '10px 0', borderBottom: '1px solid #2f3336' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">@defiking</Typography>
                </Box>
                <Box style={{ padding: '10px 0' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">@nftartist</Typography>
                </Box>
            </Box>

            {/* Trending Tokens Section */}
            <Box p={2} style={{ backgroundColor: '#18191A', borderRadius: '12px', border: '1px solid #2f3336' }}>
                <Typography variant="h6" align="left" style={{ fontFamily: 'Changa, sans-serif' }} mb={2}>Trending Tokens</Typography>
                <Box style={{ padding: '10px 0', borderBottom: '1px solid #2f3336' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">$TRB</Typography>
                </Box>
                <Box style={{ padding: '10px 0', borderBottom: '1px solid #2f3336' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">$ETH</Typography>
                </Box>
                <Box style={{ padding: '10px 0' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Changa, sans-serif' }} align="left">$BTC</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default LeftSideBar;
