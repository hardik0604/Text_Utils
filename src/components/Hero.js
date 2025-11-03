import React from 'react'

export default function Hero({ darkMode }) {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        {" "}
        <h2 className="pb-2 border-bottom">Columns with icons</h2>{" "}
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {" "}
          <div className="feature col">
            {" "}
            <div
              className="d-inline-block p-3 rounded-circle bg-light shadow-sm icon-hover"
              style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#0d6efd"
                className="bi bi-stack"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
              </svg>
            </div>
            {" "}
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>{" "}
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add
              onto it with another sentence and probably just keep going until we run
              out of words.
            </p>{" "}
            <a href="" className="icon-link">
              Call to action
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>{" "}
            </a>{" "}
          </div>{" "}
          <div className="feature col">
            {" "}
            <div
              className="d-inline-block p-3 rounded-circle bg-light shadow-sm icon-hover"
              style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#0d6efd"
                className="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </svg>
            </div>
            {" "}
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>{" "}
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add
              onto it with another sentence and probably just keep going until we run
              out of words.
            </p>{" "}
            <a href="" className="icon-link">
              Call to action
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>{" "}
            </a>{" "}
          </div>{" "}
          <div className="feature col">
            {" "}
            <div
              className="d-inline-block p-3 rounded-circle bg-light shadow-sm icon-hover"
              style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#0d6efd"
                className="bi bi-toggles"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7" />
              </svg>
            </div>{" "}
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>{" "}
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add
              onto it with another sentence and probably just keep going until we run
              out of words.
            </p>{" "}
            <a href="" className="icon-link">
              Call to action
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  )
}
