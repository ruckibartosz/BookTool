import "./InformationCard.css";
import CardContent from "./CardContent";
import CardIcon from "./CardIcon";
import CardWrapper from "./CardWrapper";

export default function InformationCard(props) {
  return (
    <CardWrapper>
      <CardIcon icon={props.icon} bgColor={props.bgColor} />
      <CardContent title={props.title} value={props.value} />
    </CardWrapper>
  );
}
