import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import Character from './Character';

const Characters = () => {

    const [page,setPage] = useState(1);
    
    const fetchCharacters = async ({queryKey}) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.json();
    }
    
    const {data,status} = useQuery({
        queryKey:["characters",page],
        queryFn: fetchCharacters,
        keepPreviousData:true,
    });
    
    console.log(data);
    
    if(status === "loading"){
        return <div>Please wait while we loading ... </div>
    }

    if(status === "error"){
        return <div>Something went wrong while getting data</div>
    }
    return (
        <div className="characters">{data.results.map((character)=> (
                <Character character={character}/>
                ))}
            <div>
                <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>Previous</button>
                <button disabled={!data.info.next} onClick={() => setPage((old) => old + 1)}>Next</button>
            </div>
        </div>
    )
    
}

export default Characters;