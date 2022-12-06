import React, { useState } from "react";
import { Stack, Rating, FormControlLabel } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderdIcon from "@mui/icons-material/FavoriteBorder";

const RatingElem = () => {
  const [rating, setRating] = useState(2);
  return (
    <Stack>
      <Rating value={rating} onChange={(e) => setRating(e.target.value)} />
      <FormControlLabel label="Your Rating" control={<Rating value={rating} onChange={(e) => setRating(e.target.value)} />} />
      <FormControlLabel label="Read Only" control={<Rating readOnly value={rating} onChange={(e) => setRating(e.target.value)} />} />
      <FormControlLabel label="Highlight Selected Only - Can be used for emoji rating" control={<Rating readOnly highlightSelectedOnly value={rating} onChange={(e) => setRating(e.target.value)} />} />
      <Rating value={2.5} max={3} />
      <Rating value={2.5} max={3} precision={0.5} />
      <Rating value={2.5} max={3} precision={0.5} icon={<FavoriteIcon fontSize="inherit" color="error" />} emptyIcon={<FavoriteBorderdIcon fontSize="inherit" color="error" />} />
    </Stack>
  );
};

export default RatingElem;
