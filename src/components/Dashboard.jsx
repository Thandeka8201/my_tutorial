import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChat from './BuyerProfileChat'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

export default function Dashboard() {
    return(
        <div className='flex flex-col gap-4'>
            <DashboardStatsGrid/>
                <div className='flex flex-row gap-4 w-full'>
                    <TransactionChart/>
                    <BuyerProfileChat/>
                </div>
                <div className='flex flex-row gap-4 w-full'>
                    <RecentOrders/>
                    <PopularProducts/>
                </div>
        </div>
    )
}