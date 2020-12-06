import React from "react";
import ReactModal from "react-modal";
import { DialogBox } from "../dialog-box";

export type Props = {
  isOpen: boolean;
  taskName: string;
  onCloseModal: () => void;
  onDelete: () => void;
};

ReactModal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

/**
 * Modal Component
 */
export const Modal: React.FC<Props> = React.memo(function Modal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      onRequestClose={props.onCloseModal}
    >
      <DialogBox
        taskName={props.taskName}
        onCloseModal={props.onCloseModal}
        onDelete={props.onDelete}
      />
    </ReactModal>
  );
});
