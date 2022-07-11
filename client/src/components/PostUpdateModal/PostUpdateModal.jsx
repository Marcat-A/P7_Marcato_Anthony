import { useState } from "react";
import { Modal } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import PostUpdate from "../PostUpdate/PostUpdate";

function PostUpdateModal({ data }) {
  const [updateOpened, setUpdateOpened] = useState(false);

  return (
    <>
      <Modal opened={updateOpened} onClose={() => setUpdateOpened(false)}>
        {/* Modal content */}
        <PostUpdate
          data={data}
          updateOpened={updateOpened}
          setUpdateOpened={setUpdateOpened}
        />
      </Modal>

      <FontAwesomeIcon
        icon={faPen}
        className="modifPost"
        onClick={() => setUpdateOpened(true)}
      />
    </>
  );
}

export default PostUpdateModal;
