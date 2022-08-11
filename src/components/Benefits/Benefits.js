import "./Benefits.css";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PaymentsIcon from '@mui/icons-material/Payments';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Benefits = () => {
  return (
    <div className="benefits flex-center">
      <section id="news">
        <ul>
          <li>
            <div><BookmarkAddedIcon/></div>
            <h3>Secure booking</h3>
            <p>When you book a tour in our office, you will get quick confirmation of payment and seats.</p>
          </li>
          <li>
            <div><AttachMoneyIcon/></div>
            <h3>Price guarantee</h3>
            <p>
              Tours cost exactly as much as with the organizers. Compare and
              save!
            </p>
          </li>
          <li>
            <div><PaymentsIcon/></div>
            <h3>Convenient payments</h3>
            <p>You will pay for the tour as you are comfortable, that is, by traditional bank transfer, online payment or cash.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Benefits;
