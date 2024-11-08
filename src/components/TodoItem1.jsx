export default function TodoItem1() {

    let todoName = 'Buy milk';
    let todoDate = '20/09/2014'

    return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 ">
          <button type="button" className="btn btn-danger kg-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
