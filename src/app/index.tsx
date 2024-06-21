import { useQuery } from "@apollo/client";
import { FlatList, Text } from "react-native";
import { GetAnimesDocument } from "../gql/graphql";

const Home = () => {
  const { data } = useQuery(GetAnimesDocument, {
    variables: { page: 1, perPage: 5 },
  });

  return (
    <FlatList
      data={data?.Page?.media ?? []}
      renderItem={(mediaItem) => <Text>{mediaItem.item?.title?.romaji}</Text>}
    />
  );
};

export default Home;
