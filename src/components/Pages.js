import React from "react";
import Pagination from '@mui/material/Pagination';
import { usePagination } from "../hooks/pagination";

const Pages = ({data}) => {
    const [totalPages,
            startPageIndex,
            endPageIndex,
            displayPage,
        ] = usePagination(4, data.length);
    return (
    <div>
        {(() => {
            const displayPosts = [];
            for(let i=startPageIndex; i <= endPageIndex; i++){
                displayPosts.push(
                    <div key={data[i.id]}>
                        <h3>
                            <span>{i + 1}</span> {data[i].title}{" "}
                        </h3>
                        <p>{data[i].body}</p>
                    </div>
                  );
                }
                return displayPosts;

            })()}
            <Pagination 
            count={totalPages}
            onChange={(event, value) => displayPage(value)} 
            />
    </div>
    );
    
};

export default Pages;