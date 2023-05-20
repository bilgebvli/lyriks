
import { ArtistCard, Loader, Error } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isfetching, error } = useGetTopChartsQuery();

  if (isfetching) return <Loader title="Loading songs around you" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left"> Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {
          data?.map((track, i) => (
            <ArtistCard key={track.key} track={track} />
          ))
        }
      </div>
    </div>
  );
};
export default TopArtists;
