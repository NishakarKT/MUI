import React from "react";
import { Grid, Card, CardContent, CardActions, CardMedia, Typography, Button } from "@mui/material";

const CardElem = () => {
    return (
        <Grid container p={2} gap={2} bgcolor="yellow">
            <Grid item xs={3}>
                <Card>
                    <CardMedia component="img" image="https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height={200} alt="image" />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="text.primary">
                            <Typography gutterBottom variant="h5" component="div">React</Typography>
                            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                        </Typography>
                        {/* <Typography gutterBottom variant="body2" color="text.secondary">Secondary</Typography>
                    <Typography gutterBottom variant="body2" color="text.disabled">Disabled</Typography> */}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">React</Typography>
                        <Typography gutterBottom variant="body2" color="text.primary">
                            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Decline</Button>
                        <Button>Accept</Button>
                    </CardActions>
                </Card>
            </Grid>


        </Grid>
    );
};

export default CardElem;