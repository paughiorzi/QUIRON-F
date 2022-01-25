import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    CardGroup,
  } from "react-bootstrap";

export default function Item ({ producto }) {

    return (
        <>
            <div>
            <Card><Card.Body><Card.Title>{producto.name}</Card.Title><Card.Text>{producto.description}</Card.Text><Card.Text>Precio:{producto.price}</Card.Text></Card.Body><Card.Footer><small className="text-muted">Last updated 3 mins ago</small><br /></Card.Footer></Card>
            </div>
        </>
    );
}