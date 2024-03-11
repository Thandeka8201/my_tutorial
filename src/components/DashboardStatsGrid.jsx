import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'

export default function DashboardStatsGrid() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={`flex gap-4 w-full ${isMobile ? 'flex-col' : 'flex-row'}`}>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-xs md:text-sm text-gray-500 font-light'>Total Sales</span>
            <div className='flex items-center'>
                <strong className='text-base sm:text-lg md:text-xl text-gray-700 font-semibold'>R834950.67</strong>
                <span className='text-xs sm:text-sm md:text-xs text-green-500 pl-2'>+198</span>
            </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
                <IoPieChart className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-xs md:text-sm text-gray-500 font-light'>Total Expenses</span>
                <div className='flex items-center'>
                    <strong className='text-base sm:text-lg md:text-xl text-gray-700 font-semibold'>R554950.00</strong>
                    <span className='text-xs sm:text-sm md:text-xs text-green-500 pl-2'>+343</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
                <IoPeople className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                <div className='flex items-center'>
                    <strong className='text-base sm:text-lg md:text-xl text-gray-700 font-semibold'>12313</strong>
                    <span className='text-sm text-red-500 pl-2'>-30</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
                <IoCart className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Orders</span>
                <div className='flex items-center'>
                    <strong className='text-base sm:text-lg md:text-xl text-gray-700 font-semibold'>16432</strong>
                    <span className='text-sm text-red-500 pl-2'>-43</span>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}

function BoxWrapper({children}){
    return(
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
    )
}
