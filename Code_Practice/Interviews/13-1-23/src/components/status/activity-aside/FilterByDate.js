import { MdArrowDropDown } from "react-icons/md";

export default function FilterByDate() {
  return (
    <div className="slds-form__row filter-by-date">
      <div className="slds-form__item" role="listitem">
        <div className="slds-form-element slds-form-element_stacked slds-is-editing">
          <div className="slds-form-element__control">
            <div className="slds-combobox_container">
              <div className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                <div
                  className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                  role="none"
                >
                  <input
                    type="text"
                    className="slds-input slds-combobox__input"
                    id="stacked-combobox-id-02"
                    aria-controls="stacked-listbox-id-02"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    autoComplete="off"
                    role="combobox"
                    placeholder="Filter by date"
                  />
                  <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                    <MdArrowDropDown />
                  </span>
                </div>
                <div
                  id="stacked-listbox-id-02"
                  className="slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid"
                  role="listbox"
                >
                  <ul
                    className="slds-listbox slds-listbox_vertical"
                    role="presentation"
                  ></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
