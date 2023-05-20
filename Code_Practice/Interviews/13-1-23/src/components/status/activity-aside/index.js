import FilterByDate from "./FilterByDate";
import TimeLine from "./TimeLine";
import "./aside.scss";

export default function ActivityAside() {
  return (
    <div className="slds-box">
      <FilterByDate />
      <TimeLine />
    </div>
  );
}
