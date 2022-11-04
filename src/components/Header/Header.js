import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll'
import "./Header.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Modal} from "@mui/material";
import AvatarImg from"../../assets/pj hard flip.jpeg"



const iconStyle={width:40, height:40, borderRadius:50, '&:hover' : {
        color : '#E0475B'
    }}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




export default function ButtonAppBar() {

    const [header, setHeader] = useState(false);
    const [open, setOpen] = useState( false);


    const openModal =() =>
        setOpen(true)

    const closeModal =() =>
        setOpen(false)



    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    useEffect(() => window.addEventListener("scroll", changeBackground), []);

    return (
        // <header style={{height: 60}} className={header ? 'active' : "header"}>
        //     <div style={{display: "flex", width: "100%" ,alignItems: "center", justifyContent: "space-around"}}>
        //         <div className={"header--item"}> <Link to={"home"} spy={true} smooth={true} className="a hover-underline-animation">Home</Link></div>
        //         <div className={"header--item"}><Link to={"services"} spy={true} smooth={true} className="hover-underline-animation">My Services</Link>
        //         </div>
        //         <div className={"header--item"}><Link to={"about"} spy={true} smooth={true} className="hover-underline-animation">About Me</Link></div>
        //         <div className={"header--item"}><Link to={"work"} spy={true} smooth={true} className="hover-underline-animation">My Work</Link></div>
        //     </div>
        // </header>
        <Box sx={{ flexGrow: 1, zIndex: 100}} >
            <header className={header ? "active": "header"}>
                <Toolbar sx={{display:"flex", justifyContent:"space-around"}}>
                    <Box sx={{display:"flex", gap:2,alignItems:"center"}}>
                        <Avatar alt="Remy Sharp" src={AvatarImg}/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                            Lew Pomorze
                        </Typography>
                    </Box>
                    {/*<IconButton*/}
                    {/*    size="large"*/}
                    {/*    edge="start"*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="menu"*/}
                    {/*    sx={{ mr: 2 }}*/}
                    {/*>*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}

                    <Box>
                        <IconButton>
                           <FacebookIcon style={iconStyle} sx={{'&:hover' : {
                                   color : 'blue'
                               }}}/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon style={iconStyle} sx={{'&:hover' : {
                                    color : 'red'
                            }}}/>
                        </IconButton>
                        <Button sx={{marginLeft: 5}} onClick={openModal} color={header ? "success":"warning"} variant="contained">Rejestracja</Button>
                    </Box>
                </Toolbar>
            </header>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
         </Box>
    );
}
