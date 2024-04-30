import { Flex, Space, Spin, Typography, Image, Button } from "antd";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { Title } = Typography;
  const { data: genres, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spin />;

  return (
    <>
      <Title level={4} style={{ marginTop: 0 }}>
        Genres
      </Title>
      <Flex gap="small" vertical>
        {genres?.results.map((genre) => (
          <Space.Compact key={genre.id}>
            <Image
              width="32px"
              height="32px"
              src={getCroppedImageUrl(genre.image_background)}
              preview={false}
              style={{ borderRadius: "8px" }}
            />
            <Button
              type="text"
              style={{
                fontWeight: selectedGenreId === genre.id ? "bold" : "normal",
              }}
              onClick={() => setSelectedGenreId(genre.id)}
            >
              {genre.name}
            </Button>
          </Space.Compact>
        ))}
      </Flex>
    </>
  );
};

export default GenreList;
