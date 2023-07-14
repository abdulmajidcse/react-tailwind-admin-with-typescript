import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faHome,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./../../components/auth/breadcrumb/Breadcrumb";
import BreadcrumbLink from "./../../components/auth/breadcrumb/BreadcrumbLink";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";

export default function Dashboard() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const doughnutChart = {
    labels: ["Delivered", "Canceled", "New"],
    datasets: [
      {
        label: "Order Status",
        data: [1040, 50, 370],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const lineChart = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Report",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <>
      <Breadcrumb title="Dashboard">
        <>
          <BreadcrumbLink name="Home" icon={faHome} />
          <BreadcrumbLink name="Dashboard" disabled />
        </>
      </Breadcrumb>

      <section className="mb-5">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 lg:mr-4">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-blue-500">
                    <FontAwesomeIcon icon={faUsers} className="text-lg" />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">New Users</h5>
                    <p className="font-bold">450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 xl:mr-4">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-yellow-500">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-lg"
                    />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">Total Products</h5>
                    <p className="font-bold">5045</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg mr-0 lg:mr-4">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-red-500">
                    <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">New Orders</h5>
                    <p className="font-bold">370</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-white/5 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-3">
                <div className="flex flex-wrap">
                  <div className="text-white px-6 py-5 shadow-lg rounded bg-green-500">
                    <FontAwesomeIcon icon={faTruckFast} className="text-lg" />
                  </div>
                  <div className="ml-2">
                    <h5 className="mb-3 font-semibold">Sales</h5>
                    <p className="font-bold">1040</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 flex flex-wrap">
        <div className="overflow-hidden w-full lg:w-8/12 mb-5 lg:mb-0">
          <div className="bg-white dark:bg-white/5 text-slate-800 dark:text-slate-100 shadow rounded-lg mr-0 lg:mr-3">
            <div className="py-3 px-5 bg-gray-100 dark:bg-gray-400/10">
              Sales Report
            </div>
            <Line data={lineChart} />
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 text-slate-800 dark:text-slate-100 shadow rounded-lg overflow-hidden w-full lg:w-4/12">
          <div className="py-3 px-5 bg-gray-100 dark:bg-gray-400/10">
            Order Report
          </div>
          <Doughnut data={doughnutChart} />
        </div>
      </section>

      <section className="bg-white dark:bg-white/5 rounded shadow-lg p-3 mb-5">
        <h2
          data-docsearch-ignore="true"
          className="text-slate-900 text-xl tracking-tight font-semibold mb-3 dark:text-slate-200"
        >
          Product List
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Search here..."
          className="w-full mb-6 dark:bg-gray-900"
        />
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {`Apple MacBook Pro 17"`}
                </th>
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="py-4 px-6">$2999</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="py-4 px-6">Black</td>
                <td className="py-4 px-6">Accessories</td>
                <td className="py-4 px-6">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav className="mt-5 mb-3 flex justify-end" aria-label="pagination">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
