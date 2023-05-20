import Datepic from "../activity-date";

export default function ActivityBar() {
  return (
    <div className="slds-tabs_default">
      <ul className="slds-tabs_default__nav" role="tablist">
        <li
          className="slds-tabs_default__item"
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
          >
            Log Calls
          </a>
        </li>
        <li
          className="slds-tabs_default__item slds-is-active"
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
          >
            Tasks
          </a>
        </li>
        <li
          className="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Event
          </a>
        </li>
        <li
          className="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Make Note
          </a>
        </li>
        <li
          className="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Add Attachment
          </a>
        </li>
        <li
          className="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Activity Set
          </a>
        </li>
        <li
          className="slds-tabs_default__item"
          title="Item Three"
          role="presentation"
        >
          <a
            className="slds-tabs_default__link"
            href="#"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-default-3"
            id="tab-default-3__item"
          >
            Custom Field
          </a>
        </li>
      </ul>
      <div
        id="tab-default-1"
        className="slds-tabs_default__content slds-show"
        role="tabpanel"
        aria-labelledby="tab-default-1__item"
      >
        New Task
        <fieldset className="slds-form-element slds-form-element_compound slds-form-element_address">
          <div className="slds-form-element__row">
            <div className="slds-size_3-of-6">
              <div className="slds-form-element">
                <label
                  className="slds-form-element__label"
                  for="form-element-id-02"
                >
                  Task Type
                  <abbr className="slds-required" title="required">
                    {" "}
                    *{" "}
                  </abbr>
                </label>
                <div className="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-id-02"
                    required=""
                    className="slds-input"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="slds-size_3-of-6">
              <div className="slds-form-element">
                <label
                  className="slds-form-element__label"
                  for="form-element-id-02"
                >
                  Subject
                </label>
                <div className="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-id-02"
                    required=""
                    className="slds-input"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="slds-form-element__row">
            <div className="slds-size_3-of-6">
              <div className="slds-form-element">
                <label
                  className="slds-form-element__label"
                  for="form-element-id-02"
                >
                  Assigend to
                  <abbr className="slds-required" title="required">
                    {" "}
                    *{" "}
                  </abbr>
                </label>
                <div className="slds-form-element__control">
                  <input
                    type="text"
                    id="form-element-id-02"
                    required=""
                    className="slds-input"
                    value="Burlington"
                  />
                </div>
              </div>
            </div>

            <div className="slds-form-element__control">
              <div className="slds-form-element__row">
                <div className="slds-size_1-of-1">
                  <div className="slds-form-element">
                    <label
                      className="slds-form-element__label"
                      for="form-element-id-01"
                    >
                      Billing Street
                    </label>
                    <div className="slds-form-element__control">
                      <textarea
                        id="form-element-id-01"
                        required=""
                        placeholder="Placeholder text…"
                        className="slds-textarea"
                      >
                        525 S. Lexington Ave
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Datepic />
        </fieldset>
        <div
          id="tab-default-2"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-2__item"
        >
          Item Two Content
        </div>
        <div
          id="tab-default-3"
          className="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-3__item"
        >
          Item Three Content
        </div>
      </div>
    </div>
  );
}
