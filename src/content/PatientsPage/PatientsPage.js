import React from 'react';
import {
  Tabs,
  Tab,
} from 'carbon-components-react';
import PatientsListTab from './PatientsListTab';
import NewExamTab from './NewExamTab';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const PatientsPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter patients-page">
      <div className="bx--row patients-page__banner">
        <div className="bx--col">
          <h1 className="patients-page__banner-heading">Обработка на пациенти</h1>
        </div>
      </div>
      <div className="bx--row patients-page__body-section">
        <div className="bx--col">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Списък">
              <PatientsListTab />
            </Tab>
            <Tab {...props.tab} label="Нов преглед">
              <NewExamTab />
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row patients-page__footer">
        <div className="bx--col-lg-16">
          <div>GreatBel EOOD (c)</div>
        </div>
      </div>
    </div>
  );
}

export default PatientsPage;