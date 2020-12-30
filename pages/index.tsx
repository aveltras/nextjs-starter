import { useHomeQuery } from "types/queries";

export default function Home() {
  const [result, reexecuteQuery] = useHomeQuery();
  const refresh = () => {
    // Refetch the query and skip the cache
    reexecuteQuery({ requestPolicy: "network-only" });
  };

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <button onClick={refresh}>Refresh</button>
      <main css={{ color: "red" }}>Hello : {data?.test}</main>
    </>
  );
}
