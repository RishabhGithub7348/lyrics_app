import {Link} from 'react-router-dom'
const DetailsHeader = ({artistId , artistData, songData}) => (
  <div className='relative w-full flex flex-col'>
<div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 '>
 <div className='absolute inset-0 flex flex-items'>
<img  src={
          artistId ? artistData?.artists[artistId].attributes?.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : songData?.images?.coverart
} alt="art" />
<div className='ml-5'>
<p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artistData?.artists[artistId].attributes?.name : songData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artistData?.artists[artistId].attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
</div>
 </div>
</div>
  </div>
);

export default DetailsHeader;
