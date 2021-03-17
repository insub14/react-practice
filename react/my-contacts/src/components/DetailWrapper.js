import {useEffect} from 'react';
import './DetailWrapper.css';

const Buttons = props => (
  <div className="buttons">
    {props.onAddContacts && <div className="detail-button" onClick={props.onAddContacts}>저장</div>}
    {props.onUpdate && <div className="detail-button" id="update" onClick={props.onUpdate}>수정</div>}
    {props.onDelete && <div className="detail-button" id="delete" onClick={props.onDelete}>삭제</div>}
    <div className="detail-button" onClick={props.onCloseDetail}>닫기</div>
  </div>
)

const Form = props => {
  const {detail, setInputs} = props;
  useEffect(() => {
      setInputs({
        ...detail,
      })
  },[setInputs,detail]); 
  return (
      <div className="detail">
        <div className="contant">
          <h4>이름</h4>
          <input type="text" id="name" placeholder="이름" value={props.inputs.name} onChange={(e) => props.onValue(e)}/>
        </div>
        <div className="contant">
          <h4>전화번호</h4>
          <input type="text" id="phone" placeholder="전화번호" value={props.inputs.phone} onChange={(e) => props.onValue(e)}/>
        </div>
        <div className="contant">
          <h4>메모</h4>
          <input type="text" id="memo" placeholder="메모" value={props.inputs.memo} onChange={(e) => props.onValue(e)}/>
        </div>
      </div>
  )
}

const Detail = props => {
  const {name, phone, memo} = props.detail;
  return (
    <div className="detail">
      <div className="contant">
        <h4>이름</h4>
        <div id="name">{name}</div>
      </div>
      <div className="contant">
        <h4>전화번호</h4>
        <div id="phone">{phone}</div>
      </div>
      <div className="contant">
        <h4>메모</h4>
        <div id="memo">{memo}</div>
      </div>
    </div>
  )
}

const DetailWrapper = props => {
  let form,buttons;
  console.log(props.formStatus);
  if (props.formStatus === 'create') {
    form = <Form 
              detail={props.detail}
              formStatus={props.formStatus}  
              inputs={props.inputs} 
              setInputs={props.setInputs}
              onValue={props.onValue}
            />
    buttons = <Buttons
                onAddContacts={props.onAddContacts}
                onCloseDetail={props.onCloseDetail}
              />
  } else if(props.formStatus === 'update') {
    form = <Form 
              detail={props.detail} 
              formStatus={props.formStatus} 
              inputs={props.inputs}
              setInputs={props.setInputs}
              onValue={props.onValue}
            />
    buttons = <Buttons
                onCloseDetail={props.onCloseDetail}
                onUpdate={() => props.onUpdate(props.inputs)}
              />
  } else {
    form = <Detail detail={props.detail}/>
    buttons = <Buttons 
                onCloseDetail={props.onCloseDetail}
                onUpdate={props.onUpdateForm}
                onDelete={() => props.onDelete(props.detail.id)}
              />
  }


  return (
    <div className="detail-wrapper">
      {form}
      {buttons}
    </div>
  )
}

export default DetailWrapper;
