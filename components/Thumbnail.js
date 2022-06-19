import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import {forwardRef} from "react"

const Thumbnail = forwardRef(({movie},ref) => {
    const baseUrl ="https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
                layout="responsive"
                width={1920}
                height={1080}
                alt={movie.name}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{movie.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{movie.title || movie.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100"> 
                    {movie.media_type && `${movie.media_type}`}&bull;&nbsp;
                    {movie.release_date || movie.first_air_date}&bull;&nbsp;
                    <ThumbUpIcon className="h-5 mx-2"/>{movie.vote_count}
                </p>
            </div>
        </div>   
    );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail; 