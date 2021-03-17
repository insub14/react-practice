import './Contacts.css';

const Contacts = props => (
  <div className="contacts" onClick={props.onOpenDetail} >
    <div className="name">
        {props.contacts.name}
    </div>
  </div>
)

export default Contacts;