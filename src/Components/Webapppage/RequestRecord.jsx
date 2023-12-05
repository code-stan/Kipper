

import "./requestrecord.scss"
const RequestRecord = () => {
  return (
    <section className="req-record">
      <h2 className="req-record-heading">Request Record From Organization</h2>
        <form action="" className="req-record-form">
            <div className="getDID-field">
                <label htmlFor="getDID">Organization&apos;s DID</label>
                <input type="text" name="" id="getDID" />
            </div>
            <div className="send-msg">
              <label htmlFor="req-msg">Message</label>
              <textarea name="" id="req-msg" rows="5" draggable="false"></textarea>
            </div>
            <button type="button" className="req-record-cta">Send Request</button>
        </form>
    </section>
  )
}

export default RequestRecord