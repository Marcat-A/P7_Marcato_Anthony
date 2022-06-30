import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm">
        <h3>Your Infos</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="Firstname"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="LastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="workat"
            placeholder="Work At"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives In"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationshipstatus"
            placeholder="Relationship Status"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="CoverImg" />
        </div>
        <button className="btn info-btn">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
