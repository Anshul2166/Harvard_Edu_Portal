import React, { Component } from "react";
import Pagination from "react-paginating";

class QAPagination extends Component {
  render() {
    return (
      <div className="QAPagination">
        {" "}
        <Pagination
          total={this.props.total}
          limit={this.props.limit}
          pageCount={this.props.pageCount}
          currentPage={this.props.currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div className="QAPagination__main-area">
              <button
                className="QAPagination__corner-btn QAPagination__corner-btn--left"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.props.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  className="QAPagination__side-navigation"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.props.handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#0079d3", color: "#fff" };
                }
                return (
                  <button
                    className="QAPagination__main-btn"
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.props.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  className="QAPagination__side-navigation"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.props.handlePageChange
                  })}
                >
                  {">"}
                </button>
              )}

              <button
                className="QAPagination__corner-btn QAPagination__corner-btn--right"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.props.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}
export default QAPagination;
