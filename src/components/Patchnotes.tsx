
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import fs from 'fs';


function notes()
{
    return (
        <div>
        <style>
        body {'{'}
        background-color: #282c34;
        color: white;
        font-family: monospace;
        {'}'}
        </style>
        <p>Patchnotes</p>
        <p>this is the patchnotes working with Angular</p>
        </div>
    );
}

export default notes;
