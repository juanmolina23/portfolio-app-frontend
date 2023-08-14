import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type GenericModalProps = {
  header: string;
  bodyMessage: string;
  hasFooter: boolean;
  actionButtonName?: string;
  actionButtonFunction?: Function;
  cancelButtonFunction?: Function;
};

export default function GenericModal({
  header,
  bodyMessage,
  hasFooter,
  actionButtonName,
  actionButtonFunction,
  cancelButtonFunction,
}: GenericModalProps) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  if (!hasFooter) {
    useEffect(() => {
      setTimeout(() => {
        navigate("/");
        setShow(false);
      }, 2000);
    }, []);
  }

  return (
    <Modal show={show} backdrop="static" keyboard={false} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyMessage}</Modal.Body>
      {hasFooter ? (
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleActionOnClick(actionButtonFunction!)}
          >
            {actionButtonName}
          </Button>
          <Button
            variant="primary"
            onClick={() => handleCancelOnClick(cancelButtonFunction!, setShow)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      ) : (
        ""
      )}
    </Modal>
  );
}

function handleActionOnClick(actionButtonFunction: Function) {
  actionButtonFunction();
}

function handleCancelOnClick(
  cancelButtonFunction: Function,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
) {
  cancelButtonFunction();
  setShow(false);
}
