
import React, { useContext } from "react";
import { DataDispatchContext, State } from "./fetchData";

function Pagination() {
    const { state, dispatch } = useContext(DataDispatchContext)!;
    const { currentPage, currentPageSmall, data, smallData, itemsPerPage } = state as State;

    const numberOfPages = Math.ceil(data.length / itemsPerPage);
    const numberOfPagesSmall = Math.max(1, Math.ceil(smallData.length / itemsPerPage));

    const canGoNext = currentPage < numberOfPages;
    const canGoNextSmall = currentPageSmall < numberOfPagesSmall;

    const nextPage = () => {
        if (currentPage < numberOfPages) {
            dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
        } else if (currentPageSmall < numberOfPagesSmall) {
            dispatch({ type: "SET_CURRENT_PAGE_SMALL", payload: currentPageSmall + 1 });
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
        } else if (currentPageSmall > 1) {
            dispatch({ type: "SET_CURRENT_PAGE_SMALL", payload: currentPageSmall - 1 });
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={prevPage}
                disabled={currentPage === 1 && currentPageSmall === 1}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
                Previous Page
            </button>
            <button
                onClick={nextPage}
                disabled={(currentPage === numberOfPages && currentPageSmall === numberOfPagesSmall) || (!canGoNext && !canGoNextSmall)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
                Next Page
            </button>
        </div>
    );
}

export default Pagination;
