import gql from "graphql-tag";
import { useQuery } from "urql";
import { useHomeQueryQuery } from "../src/components";

const HomeQuery = gql`
  query {
    test
  }
`;

export default function Home() {
  const [result, reexecuteQuery] = useHomeQueryQuery();
  const refresh = () => {
    // Refetch the query and skip the cache
    reexecuteQuery({ requestPolicy: "network-only" });
  };

  // const [result] = useQuery({
  //   query: HomeQuery,
  // });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <p
        css={{
          backgroundColor: "antiquewhite",
          color: "palevioletred",
        }}
      >
        Hello : {data?.test}
      </p>
    </div>
  );
}
