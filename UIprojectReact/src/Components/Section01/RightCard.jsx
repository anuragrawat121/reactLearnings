import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div
      className="flex items-center gap-24
     h-full w-full flex-nowrap shrink-0 overflow-x-scroll "
    >
      {props.data.map((item, idx) => {
        return <RightCardContent key={idx} data={item} />;
      })}
    </div>
  );
};

export default RightCard;
