import { useState } from 'react';
import ContactsTemplate from './components/ContactsTemplate';

function App() {
  const [detail, setDetail] = useState({
    id:'',
    name:'',
    phone:'',
    memo:'',
  });

  const [contactsList, setContactsList] = useState([
    {
      id:1,
      name:'홍길동',
      phone:'01011112222',
      memo:'메모',
    },
    {
      id:2,
      name:'김철수',
      phone:'01022223333',
      memo:'철수',
    },
  ]);

  const [searchList, setSearchList] = useState(contactsList);

  const [formStatus, setFormStatus] = useState(null);

  const [search, setSearch] = useState('');

  const [inputs, setInputs] = useState({
    name:'',
    phone:'',
    memo:'',
  });
  
  const {name, phone, memo} = inputs;

  const handleValue = (e) => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]:value,
    })
  }
  
  const handleCreateForm = () => {
    setFormStatus('create');
    setInputs({
      name:'',
      phone:'',
      memo:'',
    })
  }

  const handleCloseDetail = () => {
    setDetail({
      id:'',
      name:'',
      phone:'',
      memo:'',
    });
    setFormStatus(null);
  }

  const handleOpenDetail = contacts => {
    setDetail(contacts);
    setFormStatus('detail');
  }

  const handleSearch = e => {
    const {value: text} = e.target;
    setSearch(text);
    if(text !== ''){
      setSearchList(contactsList.filter(contacts => contacts.name.includes(text)));
    } else {
      setSearchList(contactsList);
    }
  }

  const handleAddContacts = () => {
    if(name !== '' && name !== null) {
      const newContacts = contactsList.concat({
        id:contactsList.length + 1,
        name,
        phone,
        memo,
      });
      setContactsList(newContacts);
      setSearchList(newContacts);
      setDetail({
        id:'',
        name:'',
        phone:'',
        memo:'',
      });;
      setFormStatus(null);
    }
  }

  const handleUpdateForm = () => {
    setFormStatus('update');
  }

  const handleUpdate = () => {
    const list = contactsList.map(contacts => (
      contacts.id === detail.id ? 
        { ...contacts,
          name,
          phone,
          memo,
        } :
        contacts));
    setContactsList(list);
    setSearchList(list);
    setFormStatus(null);
    setDetail({
      id:'',
      name:'',
      phone:'',
      memo:'',
    });;
    setInputs({
      name:'',
      phone:'',
      memo:'',
    });
  }

  const handleDelete = id => {
    const newContacts = contactsList.filter(contacts => contacts.id !== id)
    const sortList = newContacts.map((contacts,index) => ({
      ...contacts,
      id:index+1,
    }));
    console.log(sortList);
    setContactsList(sortList);
    setSearchList(sortList);
    setDetail({
      id:'',
      name:'',
      phone:'',
      memo:'',
    });;
    setFormStatus(null);
    setSearch('');
  }

  return (
    <ContactsTemplate 
      detail={detail}
      contactsList={contactsList}
      searchList={searchList}
      search={search}
      formStatus={formStatus}
      inputs={inputs}
      setInputs={setInputs}
      onOpenDetail={handleOpenDetail}
      onCloseDetail={handleCloseDetail}
      onCreateForm={handleCreateForm}
      onSearch={handleSearch}
      onAddContacts={handleAddContacts}
      onDelete={handleDelete}
      onUpdateForm={handleUpdateForm}
      onUpdate={handleUpdate}
      onValue={handleValue}
    />
  );
}

export default App;
