import React from "react";
import { Stack, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadcrumbsElem = () => {
    return (
        <Stack>
            <Breadcrumbs>
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator={'-'} maxItems={2}>
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator={'-'} maxItems={2} itemsAfterCollapse={3} itemsBeforeCollapse={2}>
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                <Link underline="hover" href="#">Home</Link>
                <Link underline="hover" href="#">Catalog</Link>
                <Link underline="hover" href="#">Accessories</Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
        </Stack>
    );
};

export default BreadcrumbsElem;