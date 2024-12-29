export type ParamsType = Promise<{ id: string }>;

export default async function Page(props: { params: ParamsType }) {
  const { id } = await props.params;

  const user = await fetchUser(id); // Fetch data dynamically (SSR)

  return (
    <div>
      <p>SSR ID : {id}</p>
      <p>name : {user.name}</p>
      <p>email : {user.email}</p>
      <p>phone : {user.phone}</p>
    </div>
  );
}

async function fetchUser(id: any) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  } catch (error) {
    return error;
  }
}
