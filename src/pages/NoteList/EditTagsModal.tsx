import { FC } from "react";
import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "../../types/form";

type EditTagsMotalProps = {
  availableTags: Tag[];
  show: boolean;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
  handleClose: () => void;
};
const EditTagsModal: FC<EditTagsMotalProps> = ({
  availableTags,
  show,
  handleClose,
  onDeleteTag,
  onUpdateTag,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={() => onDeleteTag(tag.id)}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTagsModal;
