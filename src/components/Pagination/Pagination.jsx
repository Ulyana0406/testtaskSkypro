import React, { useState, useEffect } from "react";

const Pagination = ({ usersPerPage, setUsersPerPage, currentPage, countOfPosts, buttons, paginate }) => {
  const [offFirstPageBtn, setOffFirstPageBtn] = useState(false);
  const [offPrevPageBtn, setOffPrevPageBtn] = useState(false);
  const [offNextPageBtn, setOffNextPageBtn] = useState(false);
  const [offLastPageBtn, setOffLastPageBtn] = useState(false);

  const countOfPages = Math.ceil(countOfPosts / usersPerPage);
  function offAllButtons() {
    setOffFirstPageBtn(true);
    setOffPrevPageBtn(true);
    setOffNextPageBtn(true);
    setOffLastPageBtn(true);
  }
  function onAllButtons() {
    setOffFirstPageBtn(false);
    setOffPrevPageBtn(false);
    setOffNextPageBtn(false);
    setOffLastPageBtn(false);
  }
  //настройка per_page
  useEffect(() => {
    if (buttons) {onAllButtons()}
    else {
      offAllButtons()
      return
    }
    if (currentPage === 1) {
      setOffFirstPageBtn(true);
      setOffPrevPageBtn(true);
    } else {
      setOffFirstPageBtn(false);
      setOffPrevPageBtn(false);
    }
    if (currentPage === countOfPages) {
      setOffNextPageBtn(true);
      setOffLastPageBtn(true);
    } else {
      setOffNextPageBtn(false);
      setOffLastPageBtn(false);
    }
    // eslint-disable-next-line
  }, [currentPage, buttons]);

  return (
    <nav style={{
        "display": "flex",
        "justifyContent": "center",
        "backgroundColor": "#fff"
    }}>
      <ul
        className="pagination"
        style={{
          display: "flex",
          "justifyContent": "center",
        }}
      >
        <button onClick={() => paginate(1)}
          disabled={offFirstPageBtn}
          href="!#"
          className="page-link"
          style={{
            border: "0",
            backgroundColor: "white",
            color: "blue"
          }}
        >
          {"<<"}
        </button>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={offPrevPageBtn}
          href="!#"
          className="page-link"
          style={{
            border: "0",
            backgroundColor: "white",
            color: "blue"
          }}
        >
          {"<"}
        </button>
        <button href="!#" className="page-link" disabled={true} style={{
            border: "0",
            backgroundColor: "white",
            color: "black"
          }}>
          {currentPage}
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={offNextPageBtn}
          href="!#"
          className="page-link"
          style={{
            border: "0",
            backgroundColor: "white",
            color: "blue"
          }}
        >
          {">"}
        </button>
        <button
          onClick={() => paginate(countOfPages)}
          disabled={offLastPageBtn}
          href="!#"
          className="page-link"
          style={{
            border: "0",
            backgroundColor: "white",
            color: "blue"
          }}
        >
          {">>"}
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
