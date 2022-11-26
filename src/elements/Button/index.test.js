import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'

import Button from './index';

test("Should not allowed click button if isDisable is present", ()=>{
    const {container} = render(<Button isDisabled></Button>); //render kalo button ada isDisabled

    expect(container.querySelector("span.disabled")).toBeInTheDocument();//ekspetasinya container-nya bakalan ada tag spannya dan punya className disabled apa ga, lalu dicek ada di dokumen apa ga (toBeInTheDocument)
});

test("Should render loading or spinner", ()=>{
    const {container, getByText} = render(<Button isLoading></Button>); 

    expect(getByText(/loading/i)).toBeInTheDocument();//getByText(/loading/i) => maksudnya mencari kata loading pada sebuah kalimat, maksud "i" disini incase sensitive

    expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a></a> tag", ()=>{
    const {container} = render(<Button type='link' isExternal></Button>); 

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", ()=>{
    const {container} = render(<Router><Button href='' type='link'></Button></Router>); 

    expect(container.querySelector("a")).toBeInTheDocument();
});
