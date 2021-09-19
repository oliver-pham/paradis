import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RoomIcon from "@mui/icons-material/Room";
import StarRateIcon from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { pink, yellow } from "@mui/material/colors";


export default function ListingCard({ host, listing }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={host.pictureUrl}
              alt={host.name}
              aria-label='host-avatar'
            ></Avatar>
          }
          title={
            <Typography
              variant='h6'
              sx={{
                display: "inline-block",
                maxWidth: "280px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {listing.name}
            </Typography>
          }
          subheader={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StarRateIcon sx={{ color: yellow[500] }} />{" "}
              <b>
                {listing.reviewScoresRating} ({listing.numberOfReviews})
              </b>
            </Box>
          }
        ></CardHeader>
        <CardMedia
          component='img'
          height='200'
          image={listing.pictureUrl}
          alt='random'
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              wordBreak: "none",
            }}
          >
            {listing.description}
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: pink[500],
                fontWeight: "fontWeightBold",
              }}
            >
              <RoomIcon /> {listing.neighbourhood}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#3DB092",
                fontWeight: "fontWeightBold",
              }}
            >
              <AccountBalanceWalletIcon sx={{ mr: 1 }} /> {listing.price}/night
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant='text' sx={{ mr: "auto" }}>
            View
          </Button>
          <IconButton
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label='favorite'
          >
            {isFavorite ? (
              <FavoriteIcon sx={{ color: pink[500] }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: pink[500] }} />
            )}
          </IconButton>
        </CardActions>
      </Card>
    );
}
