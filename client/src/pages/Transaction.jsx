import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("No token found. Redirecting to login page...");
                return;
            }

            const res = await axios.get("http://localhost:8000/users/getUser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res.data.user.transactions);
            setTransactions(res.data.user.transactions.reverse());
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setLoading(false);
        }
    };

    const renderSkeletonLoader = () => (
        <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-md p-4">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-10  dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-6  ">
                    Transaction History 
                </h1>
                {loading ? (
                    renderSkeletonLoader()
                ) : (
                    <ul className="space-y-6">
                        {transactions.map((transaction) => (
                            <li key={transaction._id} className="bg-beige dark:bg-gray-700 shadow-md rounded-md p-4 flex flex-col">
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <div className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                                            {transaction.type === 'Debit' ? 'To' : 'From'}:{' '}
                                            <span className='font-semibold text-gray-800 dark:text-gray-200'>{transaction.upiId}</span>
                                        </div>
                                    </div>
                                    <div className={`text-sm mt-2 ${transaction.type === 'Debit' ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}>
    {transaction.type === 'Debit' ? '-' : '+'}
    <span className='font-semibold text-white'>{transaction.amount}</span>
</div>
                                    {/* <div className={`text-sm mt-2 ${transaction.type === 'Debit' ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}>
                                        {transaction.type === 'Debit' ? '-' : '+'}
                                        <span className='font-semibold'>{transaction.amount}</span>
                                    </div> */}
                                </div>
                                <div className='flex justify-between mt-4 items-center'>
                                    <div className="text-[10px] text-gray-700 dark:text-gray-300">Ref No. {transaction.referenceNumber}</div>
                                    <div className="text-sm text-gray-700 dark:text-gray-300">{transaction.date}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Transaction;