import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const FlightTable = (flights: any) => {
    console.log('Flights in Table', flights.flights[0]);
    /* flights.map((item:any) =>{
        console.log('item',item);
    })*/
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Onward Flight</TableCell>
                    <TableCell>Dep Airport</TableCell>
                    <TableCell>Arrival Airport</TableCell>
                    <TableCell>Dep Time</TableCell>
                    <TableCell>Arr Time</TableCell>

                    <TableCell>Connecting Flight</TableCell>
                    <TableCell>Depart Airport</TableCell>
                    <TableCell>Arrival Airport</TableCell>
                    <TableCell>Dep Time</TableCell>
                    <TableCell>Arr Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {flights.flights &&
                    flights.flights.map((item: any) => (
                        <TableRow>
                            <TableCell>{item.sourceFlights.flightNo}</TableCell>
                            <TableCell>
                                {item.sourceFlights.departureAirport}
                            </TableCell>
                            <TableCell>
                                {item.sourceFlights.arrivalAirport}
                            </TableCell>
                            <TableCell>
                                {new Date(
                                    item.sourceFlights.departureTime
                                ).getHours()}
                                :
                                {new Date(
                                    item.sourceFlights.departureTime
                                ).getMinutes() < 10
                                    ? '0' +
                                      new Date(
                                          item.sourceFlights.departureTime
                                      ).getMinutes()
                                    : new Date(
                                          item.sourceFlights.departureTime
                                      ).getMinutes()}
                            </TableCell>
                            <TableCell>
                                {new Date(
                                    item.sourceFlights.arrivalTime
                                ).getHours()}
                                :
                                {new Date(
                                    item.sourceFlights.arrivalTime
                                ).getMinutes() < 10
                                    ? '0' +
                                      new Date(
                                          item.sourceFlights.arrivalTime
                                      ).getMinutes()
                                    : new Date(
                                          item.sourceFlights.arrivalTime
                                      ).getMinutes()}
                            </TableCell>

                            <TableCell>
                                {item.connectingFlights.flightNo}
                            </TableCell>
                            <TableCell>
                                {item.connectingFlights.departureAirport}
                            </TableCell>
                            <TableCell>
                                {item.connectingFlights.arrivalAirport}
                            </TableCell>
                            <TableCell>
                                {new Date(
                                    item.connectingFlights.departureTime
                                ).getHours()}
                                :
                                {new Date(
                                    item.connectingFlights.departureTime
                                ).getMinutes() < 10
                                    ? '0' +
                                      new Date(
                                          item.connectingFlights.departureTime
                                      ).getMinutes()
                                    : new Date(
                                          item.connectingFlights.departureTime
                                      ).getMinutes()}
                            </TableCell>
                            <TableCell>
                                {new Date(
                                    item.connectingFlights.arrivalTime
                                ).getHours()}
                                :
                                {new Date(
                                    item.connectingFlights.arrivalTime
                                ).getMinutes() < 10
                                    ? '0' +
                                      new Date(
                                          item.connectingFlights.arrivalTime
                                      ).getMinutes()
                                    : new Date(
                                          item.connectingFlights.arrivalTime
                                      ).getMinutes()}
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
};

export default FlightTable;
