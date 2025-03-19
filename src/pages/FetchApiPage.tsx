import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const FetchApiPage = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        return response.json();
      })
      .then((data) => {
        console.log("ini datanya :", data);
        setData(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-9 w-full justify-center flex flex-col text-center">
      <h1 className="text-3xl font-bold">API Playground</h1>
      <p className="text-xl">Fetching Data Fake API</p>

      <div>
        <h1>List Data :</h1>
        {loading && <p>Fetching Data .....</p>}
        {!loading && (
          <ul>
            {data.map((item) => (
              <li key={item?.id}>
                <p>Nama : {item.name}</p>
                <p>Email : {item.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FetchApiPage;
