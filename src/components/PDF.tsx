import { useState } from "react";
import { Container, Pagination } from "react-bootstrap";

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
      <img src={props.files[pageNumber]} className="img-fluid" alt="..." />
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
