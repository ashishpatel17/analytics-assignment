import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HorizontalFlexBox from "../component/HorizontalFlexBox";
import BarChart from "../component/charts/BarChart";
import DonutChart from '../component/charts/DonutChart';
import TwoColList from '../component/TwoColList';
import Table from '../component/Table';
import dashboardService from '../service/dashboardService';
import { getDashboardStats, getTotalRevenue, getTopSales, getCategorySales, getProductStocks, getStoreRevenue } from '../store/reducer';
import utilsFunctions from '../utils/utils';

const Home = () => {
    let apiService = new dashboardService();
    let utils = new utilsFunctions();
    let setDashboardStats = useSelector(getDashboardStats);
    let totalRevenue = useSelector(getTotalRevenue);
    let topSales = useSelector(getTopSales);
    let salesByCategory = useSelector(getCategorySales);
    let productStocks = useSelector(getProductStocks);
    let storeRevenue = useSelector(getStoreRevenue);


    useEffect(() => {
        apiService.getDashboardStats();
        apiService.getTotalRevenue();
        apiService.getTopSales();
        apiService.getSalesByCategory();
        apiService.getProductStocks();
        apiService.getStoreRevenue();
    }, [])


    return (
        <div className="page-container">
            <div className="flex items-center h-12">
                <div className="w-1/2">
                    <p className="mt-5 ml-5">Dashboard</p>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-end mt-5 mr-5">
                        
                    </div>
                </div>
            </div>
            <div>
                <HorizontalFlexBox
                    boxData={setDashboardStats}
                ></HorizontalFlexBox>
            </div>

            <div className="flex flex-wrap justify-center">
                <div id="chart-revenue" className="h-82 flex-grow w-full p-4 m-2 lg:w-2/5 sm:w-2/5 box-color">
                    <p className="ml-4 mb-4">Total Revenue</p>
                    <BarChart
                        height="260"
                        value={utils.convertToBarChartData(totalRevenue, true)}
                    ></BarChart>
                </div>
                <div className="h-82 flex-grow w-full p-4 m-2 lg:w-2/5 sm:w-2/5 box-color">
                    <p className=" mb-4">Top Popular Sales Item</p>
                    <div className='salesTable'>
                        <Table tableData={topSales}></Table>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="h-75 flex-grow w-2/5 lg:w-1/4 sm:w-2/5 p-4 m-2 box-color">
                    <p className='mb-5'>Sales By Category</p>
                    <div className="h-60">
                        <DonutChart labelKey="category" dataKey="sales" data chartData={salesByCategory}></DonutChart>
                    </div>
                </div>
                <div className="h-75 flex-grow w-2/5 lg:w-1/4 sm:w-2/5 p-4 m-2  box-color">
                    <TwoColList col1Key="item" col2Key="status" data={utils.twoColListDataFormat(productStocks)} title="In Demand Product Stock" col1="Item Category" col2="Stock Status"></TwoColList>
                </div>
                <div className="h-75 flex-grow w-2/5 lg:w-1/4 sm:w-2/5 p-4 m-2  box-color">
                    <p className='mb-5'>Store Revenue</p>
                    <BarChart
                        barType="horizontal"
                        height="290"
                        color="random"
                        labelTrim="true"
                        value={utils.convertToBarChartData(storeRevenue, false)}
                    ></BarChart>
                </div>
            </div>
        </div>
    );
}

export default Home