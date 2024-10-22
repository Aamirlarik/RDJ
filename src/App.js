import React, { useState } from "react";
import Header from "./components/header";
import SidebarDrawer from "./components/Drawer";
import Product from "./components/Product";
import { Container, Grid } from "@mui/material";

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 49.99 },
        { id: 3, name: "Product 3", price: 19.99 },
    ];

    const handleAddProduct = (product) => {
        console.log(`Added: ${product.name}`);
    };

    return (
        <div>
            <Header onMenuClick={toggleDrawer} />
            <SidebarDrawer open={drawerOpen} onClose={toggleDrawer} />
            <Container>
                <Grid container spacing={2}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Product product={product} onAdd={handleAddProduct} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default App;