import phone from "../assets/heroIconPhone.svg";
import mail from "../assets/mail.svg";
import map from "../assets/map.svg";
import social from "../assets/social.svg";
const ContactUs = () => {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Here’s how you can always reach us.</p>
      <div>
        <div>
          <img src={phone} alt="phone" />
          <h2>Phone numbers</h2>
          <small>(+234) 801-111-9999</small>
          <small>(+234) 801-111-9999</small>
          <small>(+234) 801-111-9999</small>
          <small>(+234) 801-111-9999</small>
        </div>
        <div>
          <img src={map} alt="" />
          <h2>Address</h2>
          <small>
            ABC Company, Inc.789 Elm Avenue 10th Floor City, State ZIP Code,
            Lekki,Lagos State.
          </small>
          <small>No 37, Main Street, Suite 450, Lekki, Lagos State.</small>
        </div>
        <div>
          <h2>Email address</h2>
          <small>SupportConnectifi@gmail.com</small>
          <small>SupportConnectifi@gmail.com</small>
        </div>
        <div>
          <h2>social</h2>
          <small>Facebook: Connectifi</small>
          <small>Instagram: Connectifi</small>
          <small>Twitter: @ConnectifiInternet</small>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
