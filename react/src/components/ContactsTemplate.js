import ContactsWrapper from './ContactsWrapper';
import Header from './Header';
import SearchBar from './SearchBar';
import DetailWrapper from './DetailWrapper';

const ContactsTemplate = props => {
  return (
    <main>
      <Header/>
      <SearchBar 
        search={props.search}
        onSearch={props.onSearch}
        onCreateForm={props.onCreateForm}
      />
      {props.searchList && 
        <ContactsWrapper 
          searchList={props.searchList}
          onOpenDetail={props.onOpenDetail}
        />
      }
      {props.formStatus && 
        <DetailWrapper
          formStatus={props.formStatus}
          detail={props.detail}
          inputs={props.inputs}
          setInputs={props.setInputs}
          onCloseDetail={props.onCloseDetail}
          onAddContacts={props.onAddContacts}
          onDelete={props.onDelete}
          onUpdateForm={props.onUpdateForm}
          onUpdate={props.onUpdate}
          onValue={props.onValue}
        />
      }
    </main>
  )
}

export default ContactsTemplate;