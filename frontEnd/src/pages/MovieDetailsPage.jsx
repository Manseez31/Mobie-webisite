import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiKey } from '../handles/apiHandler';
import axios from 'axios';

const MovieDetailsPage = () => {

    const { movie_id } = useParams();
    const [movie, setMovie] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

        const movie_by_id_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;

        try{
            async function movieData(){
                
                const response = await axios.get(movie_by_id_url);
                setMovie(response.data);
                console.log(response.data);

                const creditRespone = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${apiKey}`);
                console.log(creditRespone.data);
            } 
    
            movieData();
        }catch(error){
            console.log("Some error occurred: " + error);
        }


    }, []);

  return (
    <>
    <div className='h-auto w-full bg-theme-dark text-gray-400 relative'>
        
        <div className='h-screen w-full flex justify-center items-center gap-16 relative z-[40]'>
            <div className='h-[45vh] shadow-xl shadow-orange-600 -mt-[16%] relative z-[40]'>
                <img className='h-full w-full rounded' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_background" />
            </div>
            <div className='h-[80vh] w-1/2 flex flex-col gap-6 relative z-[40]'>
                <h1 className='text-5xl'>{movie.title ? movie.title : "No Title Available"}</h1>
                <div>
                    <button className='px-6 py-1 border border-orange-500 rounded-xl hover:bg-orange-500 hover:text-black transition-hover duration-200'>Watch Trailer</button>
                    {/* <button>Watch Trailer</button> */}
                </div>
                <div className='h-auto'>
                    <p>{movie.overview ? movie.overview : 'No overview availabe' }</p>
                    <h3 className='mt-6 text-gray-200'>Release Date: <span className='text-gray-400'>{movie.release_date}</span></h3>
                    <h3 className='mt-2 text-gray-200'>Duration: <span className='text-gray-400'>{movie.runtime} mins</span></h3>
                    <h3 className='mt-2 text-gray-200'>Status: <span className='text-gray-400'>{movie.status}</span></h3>
                    <h3 className='mt-2 text-gray-200'>Genre: {movie?.genres ? (
                        <>{movie.genres.map(gen => (<span className='mr-2 cursor-default text-gray-400' key={gen.id}>{gen.name}</span>))}</>
                    )  : 'No genre available'}</h3>
                    <h3 className='mt-2 text-gray-300 '>Production Companies: {movie?.production_companies ? (
                        <>
                            {movie.production_companies.map(comp => (<span className='text-gray-400 mr-2 hover:text-gray-100 cursor-default' key={comp.id}>{comp.name}</span>))}
                        </>
                    ): 'No Companies Found'}</h3>
                </div>

                <div className='flex gap-2'>
                    <button onClick={() => navigate(-1)} className='px-4 py-2 bg-gray-900 rounded'>Go Back</button>
                    <Link to={'/'} className='px-4 py-2 bg-gray-900 rounded'>Home Page</Link>
                </div>
                
            </div>

            <div className='absolute top-0 right-0 h-[80vh] w-full z-10 pointer-events-none flex justify-center items-center'>
                <img className='h-full w-full opacity-20' src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}?api_key=${apiKey}`} alt="movie_bakground_image" />
                <div className='h-full w-full bg-gradient-to-r from-theme-dark via-transparent to-theme-dark absolute z-15'></div>
            </div>
        </div>
    </div>
    <div className='h-[80vh] w-full bg-orange-900 -mt-[20vh] relative z-[15] px-6 py-4'>
        <div className='h-auto w-full bg-purple-500'>
            <div className='h-[50vh] w-[20vw] relative z-[10] '>
                <img src={''} className='h-full w-full' alt="movie_cast_profile_image" />
                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-theme-dark via-[rgba(0,0,0,0.8)] to-transparent'></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MovieDetailsPage;