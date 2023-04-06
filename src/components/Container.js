import { connect } from 'react-redux';
import BookingTicket from '../components/BookingTicket';

const BookingTicketContainer = ({ bookingData }) => {
  return <BookingTicket bookingData={bookingData} />;
};

const mapStateToProps = (state) => ({
  bookingData: state.booking.bookingData,
});

export default connect(mapStateToProps)(BookingTicketContainer);
