import React from 'react'
import {FcPhoneAndroid} from "react-icons/fc";
const ContactUs = () => {
  return (
    <>
    <div className='contact_info'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-10 offset-lg-1'>
                    <div className='contact'>
                        <FcPhoneAndroid/>
                       <div className="contact_info_content">
                        <div className="contact_info_title">
                            Phone
                        </div>
                        <div className="contact_info_text">
                            +91 9745745678
                        </div>
                       </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default ContactUs
