import "./breadcrumb.scss";

export default function Breadcrumb() {
  return (
    <div className="slds-box breadcrumb">
      <nav role="navigation" aria-label="Breadcrumbs">
        <ol className="slds-breadcrumb slds-list_horizontal slds-wrap">
          <li className="slds-breadcrumb__item slds-breadcrumb__item--active">
            <a href="#">Status 1</a>
          </li>
          <li className="slds-breadcrumb__item">
            <a href="#">New</a>
          </li>
          <li className="slds-breadcrumb__item">
            <a href="#">Working</a>
          </li>
          <li className="slds-breadcrumb__item">
            <a href="#">Nurturing</a>
          </li>
          <li className="slds-breadcrumb__item">
            <a href="#">Converted</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
