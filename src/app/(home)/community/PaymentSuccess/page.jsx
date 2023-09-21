"use client"

import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '@/Providers/AuthProvider';

const PaymentSuccess = () => {
    const { user } = useContext(AuthContext);
    const [successfulPayments, setSuccessfulPayments] = useState([]);
    const [sortedPayments, setSortedPayments] = useState([]);
    const [sortedAndFilteredPayments, setSortedAndFilteredPayments] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            if (user?.email) {
                axios
                    .get(`https://weather-cast-server.vercel.app/payment/success/${user.email}?paidStatus=true`)
                    .then((response) => {
                        console.log(response.data);
                        // Sort payments by paymentTime in descending order
                        const filteredData = response.data.filter((payment) => payment.paidStatus === true);

                        
                        const sortedData = filteredData.sort((a, b) => {
                            return new Date(b.paymentTime) - new Date(a.paymentTime);
                        });
                        
                        setSortedAndFilteredPayments(sortedData);
                    })
                    .catch((error) => {
                        console.error('Error fetching payment data:', error);
                    });
            }
        };

        fetchData();
    }, [user]);

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h1 className="text-2xl font-semibold mb-4 text-center">Successful Payments</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-2 border">#</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Payment ID</th>
                        <th className="p-2 border">Amount</th>
                        <th className="p-2 border">Status</th>
                        
                        <th className="p-2 border">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAndFilteredPayments.map((payment, index) => (
                        <tr key={index}>
                            <td className="p-2 border text-center">{index + 1}</td>
                            <td className="p-2 border text-center">{payment.email}</td>
                            <td className="p-2 border text-center">{payment.tranjectionId}</td>
                            <td className="p-2 border text-center">{payment.donationAmount}</td>
                            <td className="p-2 border text-center font-semibold text-green-600">Success</td>
                           
                            <td className="p-2 border text-center">{payment.paymentTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentSuccess;
