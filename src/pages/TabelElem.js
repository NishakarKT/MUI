import React from "react";
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const TabelElem = () => {
    return (
        <Box padding={4}>
            <TableContainer sx={{height: 200}} component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Roll</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Nishakar Kumar</TableCell>
                            <TableCell>20IE10019</TableCell>
                            <TableCell align="center">nishakarkumar0@outlook.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Nishakar Kumar</TableCell>
                            <TableCell>20IE10019</TableCell>
                            <TableCell align="center">nishakarkumar0@outlook.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>Nishakar Kumar</TableCell>
                            <TableCell>20IE10019</TableCell>
                            <TableCell align="center">nishakarkumar0@outlook.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell>Nishakar Kumar</TableCell>
                            <TableCell>20IE10019</TableCell>
                            <TableCell align="center">nishakarkumar0@outlook.com</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TabelElem;