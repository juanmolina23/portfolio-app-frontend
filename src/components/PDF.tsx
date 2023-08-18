import { useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import resume from "../assets/juan-molina-resume.pdf";

type PDFProps = {
  files: Array<string>;
};

function PDF(props: PDFProps) {
  const [pageNumber, setPageNumber] = useState<number>(0);

  function handlePaginationClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    let pageNum = Number.parseInt(e.currentTarget.id);
    setPageNumber(pageNum);
  }

  return (
    <Container className="appContainer shadow-lg">
      <div className="position-relative">
        <img src={props.files[pageNumber]} className="img-fluid" alt="..." />
        <a
          href={resume}
          target="_blank"
          className="download-icon rounded-circle purple-bg-color d-flex justify-content-center align-items-center"
        >
          <i className="fa-solid fa-download text-white"></i>
        </a>
      </div>

      <Pagination className="d-flex justify-content-center" size="lg">
        {props.files.map((_file, index) => {
          const fileNum = index + 1;
          return (
            <Pagination.Item
              key={index}
              id={index.toString()}
              active={index === pageNumber}
              onClick={(e) => handlePaginationClick(e)}
            >
              {fileNum}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </Container>
  );
}

export default PDF;
