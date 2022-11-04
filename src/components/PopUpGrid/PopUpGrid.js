import React, {useState} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import img1 from "../../assets/photo1.jpg"
import img2 from "../../assets/photo2.jpg"
import img3 from "../../assets/photo3.jpg"
import "./PopUpGrid.css"
import popUpDB from "../../data/popUpDB";
import Box from "@mui/material/Box";
import {Modal} from "@mui/material";

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

export default function PopUpGrid(){

    const [open, setOpen] = useState( false);


    const openModal =() =>
        setOpen(true)

    const closeModal =() =>
        setOpen(false)

    return(
        <div className={"sectionWrapper"}>
            {popUpDB.map((item)=><Card key={item.id} sx={{ width: 345, margin: "20px 20px"}}>
                <CardMedia
                    component="img"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={openModal}  variant={"contained"} size="small">Sprawdzam</Button>
                </CardActions>
            </Card>)}
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

        </div>
    )
}

