import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemList(props) {
  const navigate = useNavigate();
  const { fields, service, tittle, addItemPath } = props;

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const fieldsNoId = fields.filter((field) => field !== "id");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await service.getItems();
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-700"
          onClick={() => navigate({ addItemPath })}
        >
          {tittle}
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {fieldsNoId.map((field, index) => (
                <th
                  key={index}
                  className="text-left font-medium text-gray-500 tracking-wider py-3 px-6"
                >
                  {field}
                </th>
              ))}
              <th className="text-center font-medium text-gray-500 tracking-wider py-3 px-10">
                Accion
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {items.map((item, indexItem) => (
                <tr key={indexItem} className="items-center">
                  {/* {fieldsNoId.filter(
                    (field, indexField) => item[field].length == 1
                  )} */}
                  {fieldsNoId.map((field, indexField) => {
                    console.log("nanan", item[field], item[field].length);
                    return !Array.isArray(item[field]) ? (
                      <td
                        key={indexField}
                        className="text-left px-6 py-4 whitespace-nowrap "
                      >
                        <div className="text-sm text-gray-500">
                          {item[field]}
                        </div>
                      </td>
                    ) : (
                      <button
                        className={`py-2 px-6 rounded text-white font-semibold bg-lime-500 hover:bg-lime-700`}
                      >
                        Ver en detalle
                      </button>
                    );
                  })}
                  <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-1"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default ItemList;
