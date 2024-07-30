import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../features/search/searchSlice";
import { FaSearch } from "react-icons/fa";
import { LoadingCircle, MediaCard } from "../components";
import { Link } from "react-router-dom";

const Discover = () => {
  const dispatch = useDispatch();
  const { search, query, isLoading, error, pages } = useSelector((store) => store.search);
  const [mainQuery, setMainQuery] = useState(query || '');
  const [page, setPage] = useState(1);
  const [qPage, setQPage] = useState(1);

  useEffect(() => {
    dispatch(fetchSearch({ query: mainQuery, page, qPage }));
  }, [dispatch, page, qPage]);

  const handleQuery = (e) => {
    const value = e.target.value;
    setMainQuery(value);
  };

  const handleSearchClick = () => {
    setQPage(1); // Reset query page to 1 when a new search is performed
    dispatch(fetchSearch({ query: mainQuery, page, qPage: 1 }));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && (mainQuery ? newPage <= pages : true)) {
      if (mainQuery) {
        setQPage(newPage);
      } else {
        setPage(newPage);
      }
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] pt-20">
      <div className="container main-container py-8 lg:py-10">
        {/* Search */}
        <div className="w-full grid place-items-center">
          <h1 className="mb-2 lg:mb-3 text-xl sm:text-2xl lg:text-3xl tracking-widest font-semibold gradient-text">
            Search for Movies or TV Shows
          </h1>
          <div className="flex gap-y-1 flex-col md:flex-row items-center justify-center w-full max-w-[700px]">
            <input
              type="text"
              className="w-full h-[30px] lg:h-[34px] pl-2 focus:outline-none text-black text-lg tracking-wider rounded-tl-md rounded-bl-md rounded-tr-md md:rounded-tr-none rounded-br-md md:rounded-br-none focus:border focus:border-[#FF6F61]"
              value={mainQuery}
              onChange={handleQuery}
            />
            <button
              type="button"
              className="grid place-items-center px-4 w-full md:w-auto h-[30px] lg:h-[34px] bg-green-500 transition-all ease-in-out duration-150 hover:bg-green-400 rounded-tr-md rounded-br-md rounded-tl-md md:rounded-tl-none rounded-bl-md md:rounded-bl-none"
              onClick={handleSearchClick}
            >
              <FaSearch />
            </button>
          </div>
          <div className="my-6 lg:my-8 h-[2px] w-full bg-white" />
        </div>
        {/* -------------------- */}
        {search?.length < 1 && (
          <div className="h-full pt-16 lg:pt-20 grid place-items-center">
            <h1 className="text-2xl lg:text-4xl tracking-wider font-semibold text-center">
              No results found. Try searching for a movie or TV show.
            </h1>
          </div>
        )}
        {isLoading ? (
          <div className="h-full pt-16 lg:pt-20 grid place-items-center">
            <LoadingCircle />
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:mt-8">
              {search?.map((item) => {
                const { id } = item;
                return <MediaCard key={id} {...item} />;
              })}
            </div>
            {search?.length > 0 && !mainQuery && (
              <div className="w-full mt-5 lg:mt-7 grid place-items-center">
                                  <div className="flex items-center gap-x-4">
                                      <Link to='/movie' className="px-3 py-1 rounded-md text-white border border-[#FF6F61] text-lg md:text-xl lg:text-2xl transition-all ease-in-out duration-150 hover:bg-[#FF6F61] hover:text-white">
                                          Discover more movies!
                                      </Link>
                                      <Link to='/tv' className="px-3 py-1 rounded-md text-white border border-[#FF6F61] text-lg md:text-xl lg:text-2xl transition-all ease-in-out duration-150 hover:bg-[#FF6F61] hover:text-white">
                                          Discover more tv shows!
                                      </Link>
                </div>
              </div>
            )}
            {search?.length > 0 && mainQuery && (
              <div className="w-full mt-5 lg:mt-7 flex items-center justify-end">
                <div className="join">
                  <button className="join-item btn" onClick={() => handlePageChange(qPage > 1 ? qPage - 1 : 1)}>«</button>
                  <button className="join-item btn">{`Page ${qPage}`}</button>
                  <button className="join-item btn" onClick={() => handlePageChange(qPage < pages ? qPage + 1 : qPage)}>»</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Discover;
