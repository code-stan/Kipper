import "./sendrecord.scss"
const SendRecord = () => {
  return (
    <section className="send-record">
      <h2 className="send-record-heading">Send Record From Organization</h2>
        <form action="" className="send-record-form">
            <div className="getDID-field">
                <label htmlFor="getDID">Organization&apos;s DID</label>
                <input type="text" name="" id="getDID" />
            </div>
            <div className="select-folder">
              <label htmlFor="">Select folder</label>
                  <select>
                  <option selected disabled></option>
                </select>
            </div>
            <div className="send-msg">
              <label htmlFor="send-msg">Message</label>
              <textarea name="" id="send-msg" rows="5" draggable="false"></textarea>
            </div>
            <button type="button" className="send-record-cta">Send Record</button>
        </form>
    </section>
  )
}

export default SendRecord