import React, { useEffect, useState } from "react";

function Test() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // 呼叫後端 API
        fetch("http://localhost:8000/api/items")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default test;
