import Contacts from './Contacts';
import './ContactsWrapper.css';

const ContactsWrapper = props => {
  const contacts = props.searchList.map(value => {
    return (
      <Contacts 
        key={value.id}
        contacts={value} 
        onOpenDetail={() => props.onOpenDetail(value)}
      />
    )
  });
  return (
    <div className="contacts-wrapper">
      <div className="contacts-list">
        {contacts}
      </div>
    </div>
  );
}

export default ContactsWrapper;