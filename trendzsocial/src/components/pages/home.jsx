import React from "react";
import Sidebar from "../navbar/sidebar"; // This is your top navbar
import Rightbar from "../navbar/rightbar";
import LeftSideBar from "../navbar/leftsidebar";
import { Box, Grid, Avatar, Paper, Typography, Button, Card, CardHeader, CardMedia, CardContent, Chip, TextField, Select, MenuItem } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'; // Token Swap
import RedeemIcon from '@mui/icons-material/Redeem'; // Airdrop
import PhotoIcon from '@mui/icons-material/Photo'; // Photo/video
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // NFT
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ForwardIcon from '@mui/icons-material/Forward'; // Forward
import DonateIcon from '@mui/icons-material/VolunteerActivism'; // Donate
import ClaimIcon from '@mui/icons-material/CardGiftcard'; // Claim
import ChartIcon from '@mui/icons-material/ShowChart'; // Chart
import DiscussionIcon from '@mui/icons-material/Forum'; // Discussion
import OfferIcon from '@mui/icons-material/LocalOffer'; // Offer
import logo from '../assets/images/trendzlogo.png';
import logo2 from '../assets/images/logo2.webp';
import logo1 from '../assets/images/logo1.webp';
import logo3 from '../assets/images/logo3.webp';
import logo4 from '../assets/images/logo4.webp';
import logo5 from '../assets/images/logo5.webp';
import Stories from '../stories/stories'; // Import the Stories component

function Home() {
    const [postType, setPostType] = React.useState('Photo/Video');

    const handlePostTypeChange = (event) => {
        setPostType(event.target.value);
    };

    const handleChartClick = () => {
        window.open("https://dexscreener.com/bsc/0x39b8c4d3ccbdb4ca2f6cd0d1d72a326dc0a24f48", "_blank");
    };

    const posts = [
        {
            type: 'Photo/Video',
            description: 'Normal/usual posting which can be monetized and every viewer can donate to content creator.',
            tag: 'photo/video',
            buttons: [
                { icon: <FavoriteIcon />, label: 'Like' },
                { icon: <CommentIcon />, label: 'Comment' },
                { icon: <ForwardIcon />, label: 'Forward' },
                { icon: <DonateIcon />, label: 'Donate' }
            ],
            image: logo1 // Use logo1 for this post
        },
        {
            type: 'Airdrop',
            description: 'This posting is used for any dev to drop any Airdrop event on Trendz Blockchain. It will connect using web3 to claim it.',
            tag: 'airdrop',
            buttons: [
                { icon: <ClaimIcon />, label: 'Claim' },
                { icon: <FavoriteIcon />, label: 'Like' },
                { icon: <CommentIcon />, label: 'Comment' },
                { icon: <ForwardIcon />, label: 'Forward' }
            ],
            image: logo2 // Use logo2 for this post
        },
        {
            type: 'Token',
            description: 'We can post promotional things for a token. Users can see it, click "chart" to see the chart, and click "discussion" to join the discussion group.',
            tag: 'token',
            buttons: [
                { icon: <ChartIcon />, label: 'Chart', onClick: handleChartClick },
                { icon: <DiscussionIcon />, label: 'Discussion' },
                { icon: <FavoriteIcon />, label: 'Like' },
                { icon: <CommentIcon />, label: 'Comment' },
                { icon: <ForwardIcon />, label: 'Forward' }
            ],
            image: logo3 // Use logo3 for this post
        },
        {
            type: 'NFT',
            description: 'I can offer NFT to all Trendz Social Media users. They could buy it, resembling a marketplace mechanism.',
            tag: 'NFT',
            buttons: [
                { icon: <FavoriteIcon />, label: 'Like' },
                { icon: <CommentIcon />, label: 'Comment' },
                { icon: <OfferIcon />, label: 'Buy/Auction' }
            ],
            image: logo4 // Use logo4 for this post
        },
        {
            type: 'Token Swap',
            description: 'We can offer to swap our useless tokens with another token. Example: Offer 100$ TRB for 70$ Pepe and swap if accepted.',
            tag: 'Auction',
            buttons: [
                { icon: <FavoriteIcon />, label: 'Like' },
                { icon: <CommentIcon />, label: 'Comment' },
                { icon: <ForwardIcon />, label: 'Forward' },
                { icon: <OfferIcon />, label: 'Offer' }
            ],
            image: logo5 // Use logo5 for this post
        }
    ];

    return (
        <div style={{ fontFamily: 'Changa, sans-serif', backgroundColor: '#18191A', margin: 0, padding: 0, minHeight: '100vh' }}>
            {/* Top Navbar */}
            <Sidebar />

            <Grid container style={{ marginTop: '20px' }}> {/* Adjust for navbar height */}
                {/* Left Sidebar */}
                <Grid item xs={2.5} style={{ backgroundColor: '#18191A' }}>
                    <LeftSideBar />
                </Grid>

                {/* Main Content */}
                <Grid item xs={6} style={{ backgroundColor: '#18191A', padding: '20px', margin: 0, overflowY: 'auto' }}>
                    <Stories />  {/* Add Stories component here */}

                    {/* Static Post Creation Section */}
                    <Paper
                        style={{ padding: '10px', backgroundColor: '#242526', borderRadius: '8px', marginBottom: '20px' }}
                        elevation={3}
                    >
                        <Box display="flex" alignItems="center" p={1} justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <Avatar src={logo} alt="Profile" />
                                <Typography variant="body1" style={{ color: 'white', marginLeft: '10px' }}>
                                    @benndev
                                </Typography>
                            </Box>
                            <Select
                                value={postType}
                                onChange={handlePostTypeChange}
                                variant="outlined"
                                style={{
                                    backgroundColor: '#3A3B3C',
                                    color: 'white',
                                    borderRadius: '30px',
                                    padding: '0 10px',
                                    height: '40px',
                                    minWidth: '150px',
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            backgroundColor: '#242526',
                                            color: 'white',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="Photo/Video">
                                    <PhotoIcon style={{ marginRight: '5px' }} />
                                    Photo/Video
                                </MenuItem>
                                <MenuItem value="Airdrop">
                                    <RedeemIcon style={{ marginRight: '5px' }} />
                                    Airdrop
                                </MenuItem>
                                <MenuItem value="Token">
                                    <SwapHorizIcon style={{ marginRight: '5px' }} />
                                    Token
                                </MenuItem>
                                <MenuItem value="NFT">
                                    <EmojiEmotionsIcon style={{ marginRight: '5px' }} />
                                    NFT
                                </MenuItem>
                                <MenuItem value="Token Swap">
                                    <SwapHorizIcon style={{ marginRight: '5px' }} />
                                    Token Swap
                                </MenuItem>
                            </Select>
                        </Box>

                        <Box display="flex" alignItems="center" p={1}>
                            <TextField
                                variant="outlined"
                                placeholder="What's on your mind?"
                                fullWidth
                                InputProps={{
                                    style: {
                                        backgroundColor: '#3A3B3C',
                                        color: 'white',
                                        borderRadius: '30px',
                                        paddingLeft: '15px',
                                        height: '40px'
                                    },
                                }}
                                style={{ marginTop: '5px' }}
                            />
                        </Box>

                        <Box display="flex" justifyContent="flex-end" paddingX={2} paddingTop={2}>
                            <Button variant="contained" color="primary">
                                Post
                            </Button>
                        </Box>
                    </Paper>

                    {/* Displaying All Post Types */}
                    {posts.map((post, index) => (
                        <Card key={index} style={{ backgroundColor: '#242526', borderRadius: '8px', color: 'white', marginBottom: '10px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={post.image} alt="User" />
                                }
                                title={
                                    <Box display="flex" flexDirection="column">
                                        <Typography variant="body1" style={{ color: 'white', fontWeight: 'bold' }}>
                                            J-Ben
                                        </Typography>
                                        <Typography variant="body2" style={{ color: 'gray', marginBottom: '8px' }}>
                                            August 12
                                        </Typography>
                                        <Box display="flex" alignItems="center" justifyContent="start" gap="8px">
                                            <Chip label={post.type} style={{ backgroundColor: '#3A3B3C', color: 'white' }} />
                                        </Box>
                                    </Box>
                                }
                            />
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', textAlign: 'justify', fontFamily: 'Changa, sans-serif', marginBottom: '15px' }}>
                                    {post.description}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={post.image}
                                    alt="Post image"
                                />
                            </CardContent>
                            <Box display="flex" justifyContent="space-around" paddingY={2}>
                                {post.buttons.map((button, buttonIndex) => (
                                    <Button
                                        key={buttonIndex}
                                        startIcon={button.icon}
                                        style={{ color: 'white' }}
                                        onClick={button.label === 'Chart' ? button.onClick : undefined} // Attach onClick for the Chart button
                                    >
                                        {button.label}
                                    </Button>
                                ))}
                            </Box>
                        </Card>
                    ))}
                </Grid>

                {/* Rightbar */}
                <Grid item xs={3.5} style={{ backgroundColor: '#18191A', paddingTop: '20px' }} className="pr-5">
                    <Rightbar />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
