import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);
export default function Dashboard({ auth }) {
    const barData = {
        labels: ["January", "February", "March", "April"],
        datasets: [{
            label: "Sales",
            data: [30, 50, 80, 40],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
        }],
    };

    const lineData = {
        labels: ["January", "February", "March", "April"],
        datasets: [{
            label: "Revenue",
            data: [10, 60, 30, 90],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
        }],
    };

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
         <Head title="Dashboard" />

       {/* <div className="py-12">

                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Dashboard Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-center text-lg font-medium">Sales Overview</h4>
                            <Bar data={barData} />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-center text-lg font-medium">Revenue Trend</h4>
                            <Line data={lineData} />
                        </div>
                    </div>
                </div>

        </div> */}
    </AuthenticatedLayout>
    );
}
