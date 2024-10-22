import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import productImage from "../assit/pro1.webp";

const Product = ({ product, onAdd }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAdd = () => {
    localStorage.setItem(product.id, JSON.stringify(product));
    onAdd(product);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Card sx={{ margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={productImage} // Use the imported image here
          alt={product.name}
        />

        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography color="text.secondary">${product.price}</Typography>
          <Button onClick={handleAdd} variant="contained" color="primary">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={`${product.name} added to cart`}
      />
    </>
  );
};

export default Product;
