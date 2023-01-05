import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import ConversationModal from "./ConversationModal";
import ContactModal from "./ContactModal";

const CONVERSATION_KEY = "conversation";
const CONTACTS_KEY = "contacts";

function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const conversationOpen = activeKey === CONVERSATION_KEY;
  const [modalOpen, setModalOpen] = useState(false)

  function closeModal(){
    setModalOpen(false)
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Link eventKey={CONVERSATION_KEY}>conversations</Nav.Link>
          <Nav.Link eventKey={CONTACTS_KEY}>contacts</Nav.Link>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your id : <span className="text-muted">{id}</span>
        </div>
        <Button onClick={()=>setModalOpen(true)} className="rounded-0">
          New {conversationOpen ? "conversation" : "contacts"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? <ConversationModal closeModal={closeModal} /> : <ContactModal closeModal={closeModal}/>}
      </Modal>
    </div>
  );
}

export default Sidebar;
