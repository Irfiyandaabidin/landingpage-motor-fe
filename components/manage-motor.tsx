import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ManageMotor = () => {
  const [data, setData] = useState<IMotor[]>([]);
  const [trigger, setTriger] = useState<boolean>(true);

  const handleDelete = async(id:number) => {
    try {
      const response = await axios.delete(`${process.env.API_URL}/motor/${id}`)
      if(response.status == 200){
        alert("Success delete");
        setTriger(prev => !prev)
      }
    } catch (error:any) {
      alert(error.message)
    }
  }

  const getData = async () => {
    const response = await axios.get(`${process.env.API_URL}/motor`)
    setData(response.data.data.motors)
  }

  useEffect(() => {
    getData()
  }, [trigger])

  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Model
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(motor => (
            <tr key={motor.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {motor.brand}
              </th>
              <td className="px-6 py-4">{motor.model}</td>
              <td className="px-6 py-4">{motor.year}</td>
              <td className="px-6 py-4">Rp.{motor.price}</td>
              <td className="px-6 py-4">
                <Link
                  href={`/${motor.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline bg-green-400 p-2 mx-2 rounded-lg"
                >
                  Edit
                </Link>
                <a
                  onClick={() => handleDelete(motor.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline bg-red-400 p-2 mx-2 rounded-lg"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMotor;
