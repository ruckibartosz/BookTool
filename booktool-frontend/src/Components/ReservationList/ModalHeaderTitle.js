import { useSelector } from "react-redux";

export default function ModalHeaderTitle(props) {
  const { reservationId, clientId } = useSelector((state) => state.modal);

  return (
    <div className="header__title">
      <span>{clientId ? clientId : "Rezerwacja nr.:"}</span>
      <span>{reservationId}</span>
    </div>
  );
}
