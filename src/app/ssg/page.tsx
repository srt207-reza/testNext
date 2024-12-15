import Link from "next/link";
import React from "react";

export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      <h1>SSG Page</h1>
      <ul>
        {users?.map((user: any) => (
          <li key={user.id}>
            <Link href={`ssg/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
