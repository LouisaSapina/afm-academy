import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import React, { useState, useEffect, Children } from 'react';

import {BiPlus, BiSave} from 'react-icons/bi';
import {ImCancelCircle} from 'react-icons/im';


const PaginableTable = ({columns, rows, rowsPerPage, children, isExtendable, handleOnAdd}) => {
    const [page,
        setPage] = useState(0);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const [isAdding, setIsAdding] = useState(false);

    const cellPadding = '20px 0px';
    const cellFont = `400 16px/normal 'Inter', sans-serif`;
    const headCellFont = `500 16px/normal 'Inter', sans-serif`;
    const cellColor = '#3A3939'
    const headCellColor = '#20102B'

    const addInputStyle = {
        height: '35px',
        width: '80%',

        fontFamily: 'Inter',
        fontSize: '1.2rem',

        border: '1px solid black',
        borderRadius: '2px',

        padding: '10px',
        boxSizing: 'border-box'
    }

    const [addData, setAddData] = useState({
        name: '' , 
        subname: '', 
        start_date: '', 
        end_date: '',
    });

    const handleAddDataChange = (name, value) => {
        setAddData({ ...addData, [name]: value })
    }

    const _handleAdd = () => {
        setIsAdding(true)
    }

    const _handleSave = () => {
        handleOnAdd(addData)

        setIsAdding(false)
    }

    const _handleCancel = () => {
        setAddData({
            name: '' , 
            subname: '', 
            start_date: '', 
            end_date: '',
        })
        setIsAdding(false)
    }

    return (
        <TableContainer component={Paper} style={{backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0', boxSizing: 'border-box'}}>
            <Table>
                <TableHead > 
                    <TableRow style={{border: 'none'}}>
                        {columns.map((column, index) => {
                            return <TableCell 
                                        style={{ padding: cellPadding, font: headCellFont, color: headCellColor }} 
                                        align={index === columns.length - 1 ? 'right' : 'left'} 
                                        key={index}
                                    >
                                        {index === columns.length - 1 
                                            ? isExtendable
                                                ? <BiPlus style={{color: headCellColor, cursor: 'pointer'}} size={23} onClick={() => _handleAdd()}/> 
                                                : ''
                                            : column
                                        }
                                    </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isAdding ? <TableRow>
                        <TableCell style={{ minWidth: '200px', padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="text" style={addInputStyle} value={addData['name']} onChange={(e) => handleAddDataChange('name', e.target.value)}/>
                        </TableCell>
                        <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="text" style={addInputStyle} value={addData['subname']} onChange={(e) => handleAddDataChange('subname', e.target.value)}/>
                        </TableCell>
                        <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="text" style={addInputStyle} value={addData['start_date']} onChange={(e) => handleAddDataChange('start_date', e.target.value)}/>
                        </TableCell>
                        <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>
                            <input type="text" style={addInputStyle} value={addData['end_date']} onChange={(e) => handleAddDataChange('end_date', e.target.value)}/>
                        </TableCell>
                        <TableCell 
                            style={{ padding: cellPadding, font: cellFont, color: cellColor, display: 'flex', flexDirection: 'row', alignItems: 'center',gap: '10px'}} 
                            align='right'

                            >
                                <BiSave style={{color: headCellColor, cursor: 'pointer'}} size={23} onClick={() => _handleSave()}/> 
                                <ImCancelCircle style={{color: headCellColor, cursor: 'pointer'}} size={23} onClick={() => _handleCancel()}/> 
                        </TableCell>
                    </TableRow> : null}
                    {Array.isArray(rows) ? rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, index) => (
                        <TableRow key={index} id={row.job_ex_id}>
                            <TableCell style={{ minWidth: '200px', padding: cellPadding, font: cellFont, color: cellColor }}>{row.org_name}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>{row.position}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>{row.start_date ? row.start_date.substring(0, 10) : ''}</TableCell>
                            <TableCell style={{ padding: cellPadding, font: cellFont, color: cellColor }}>{row.end_date ? row.end_date.substring(0, 10) : ''}</TableCell>
                            <TableCell 
                                style={{ padding: cellPadding, font: cellFont, color: cellColor, display: 'flex', flexDirection: 'row-reverse', gap: '10px'}} 
                                align='right'
                                
                                >

                                {children}
                            </TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[rowsPerPage]}/>
        </TableContainer>
    );
};

export default PaginableTable;