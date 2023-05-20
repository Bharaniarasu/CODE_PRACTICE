import { useState } from "react";
import ActivityAside from "./activity-aside";
import ActivityMain from "./activity-main";
import "./status.scss";

export default function Status() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="slds-tabs_default tabs">
      <ul className="slds-tabs_default__nav" role="tablist">
        <li
          className={`slds-tabs_default__item ${
            activeTab === 1 && "slds-is-active"
          }`}
          title="Item One"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="0"
            aria-selected="true"
            aria-controls="tab-default-1"
            id="tab-default-1__item"
            onClick={() => setActiveTab(1)}
          >
            ACTIVITY
          </a>
        </li>
        <li
          className={`slds-tabs_default__item ${
            activeTab === 2 && "slds-is-active"
          }`}
          title="Item Two"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-2"
            id="tab-default-2__item"
            onClick={() => setActiveTab(2)}
          >
            INFORMATION
          </a>
        </li>
      </ul>
      <div
        id="tab-default-1"
        className={`slds-tabs_default__content ${
          activeTab === 1 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-1__item"
      >
        <div className="slds-grid slds-wrap slds-gutters">
          <div className="slds-col slds-size_1-of-1 slds-medium-size_8-of-12">
            <ActivityMain />
          </div>
          <div className="slds-col slds-size_1-of-1 slds-medium-size_4-of-12">
            <ActivityAside />
          </div>
        </div>
      </div>
      <div
        id="tab-default-2"
        className={`slds-tabs_default__content ${
          activeTab === 2 ? "slds-show" : "slds-hide"
        }`}
        role="tabpanel"
        aria-labelledby="tab-default-2__item"
      >
        Information
      </div>
    </div>
  );
}
