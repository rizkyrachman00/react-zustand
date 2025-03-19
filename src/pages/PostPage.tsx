import React, { useState } from "react";

const PostPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePost = () => {
    setLoading(true);
    setMessage("");

    const newUser = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengirim data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response dari server:", data);
        setMessage(`Data berhasil dikirim! ID: ${data.id}`);
      })
      .catch((err) => {
        console.error("Error:", err);
        setMessage("Terjadi kesalahan!");
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = (id: number) => {
    setLoading(true);
    setMessage("");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setMessage(`User dengan ID ${id} berhasil dihapus!`);
        } else {
          throw new Error("Gagal menghapus data");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setMessage("Terjadi kesalahan!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      PostPage
      <h1>Post Data</h1>
      <button onClick={handlePost} disabled={loading}>
        {loading ? "Mengirim..." : "Kirim Data"}
      </button>
      <h1>DELETE Data</h1>
      <button onClick={() => handleDelete(1)} disabled={loading}>
        {loading ? "Menghapus..." : "Hapus User"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostPage;
