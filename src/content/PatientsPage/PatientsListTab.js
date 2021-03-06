import React, { useState } from 'react';
import { DataTableSkeleton, Pagination, Button } from 'carbon-components-react';
import { Get } from 'react-axios'
import PatientListTable from './PatientListTable';
import SearchByEGN from '../../components/SearchByEGN';


const patient_table_headers = [
  { key: 'firstname', header: 'Име' },
  { key: 'secondname', header: 'Презиме' },
  { key: 'lastname', header: 'Фамилия' },
  { key: 'egn', header: 'ЕГН' },
  { key: 'address', header: 'Адрес' },
  { key: 'telephone', header: 'Телефон' },
  { key: 'email', header: 'E-mail' },
  //{ key: 'examcount', header: 'Брой прегледи' },
  //{ key: 'timestamp', header: 'Дата на създаване' },
];

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    id: row._id,
    timestamp: new Date(row.timestamp).toLocaleDateString(),
  }));

const PatientsListTab = ({ goToNextTab }) => {

  var setAxiosStateProps;
  var bookmarks = [null];
  var totalItems = 0;
  const pageSize = 5;

  const AxiosRequest = () => {
    const [stateProps, setStateProps] = useState(
      {
        searchParams: { search: '', bookmark: null, pagesize: pageSize },
        currentPage: 1
      });

    setAxiosStateProps = setStateProps;

    return (
      <div>
        <Get url={process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_PATIENT_FIND_API} params={stateProps.searchParams}>
          {(error, response, isLoading, makeRequest, axios) => {
            if (error) {
              return (
                <div>
                  <p>Възникна грешка: {error.message}</p>
                  <p>Опитайте отново!</p>
                </div>)
            }
            else if (isLoading) {
              return (
                <DataTableSkeleton
                  columnCount={patient_table_headers.length}
                  rowCount={pageSize}
                  headers={patient_table_headers}
                />
              )
            }
            else if (response !== null) {
              const rows = getRowItems(response.data.docs);
              if (((stateProps.currentPage - 1) * pageSize + response.data.count) > totalItems)  //this is new page that has not been presented so far
              {
                totalItems += response.data.count;
                bookmarks = [...bookmarks, response.data.bookmark];
              }
              console.log('rows: ', rows);
              console.log('currentPage: ', stateProps.currentPage);
              console.log('totalItems: ', totalItems);
              console.log('bookmarks: ', bookmarks);

              return (
                <>
                  <PatientListTable
                    headers={patient_table_headers}
                    rows={rows}
                    refreshCallBack={() => {
                      console.log("forceUpdate");
                      //let props = {...stateProps};
                      //props.searchParams.bookmark=null;
                      //props.currentPage = 1;

                      bookmarks = [null];
                      setStateProps({
                        searchParams: { search: stateProps.searchParams.search, bookmark: null, pagesize: pageSize },
                        currentPage: 1
                      });
                      totalItems = 0;
                      makeRequest();
                    }}
                    newPatientHandler={(withPatientId)=>{ goToNextTab(withPatientId)}}

                  />
                  <Pagination
                    //pagesUnknown
                    totalItems={totalItems + 1}
                    page={stateProps.currentPage}
                    backwardText="Назад"
                    forwardText="Напред"
                    itemsPerPageText="Редове на страница"
                    pageNumberText="Номер на страница"
                    pageText={page => `Страница ${page}`}
                    pageRangeText={(current, total) => `от ${total} ${total === 1 ? 'страница' : 'страници'}`}
                    itemText={(min, max) => `Позиции: ${min}–${max}`}
                    pageSizes={[pageSize]}
                    onChange={({ page, pageSize }) => {
                      setStateProps(
                        {
                          searchParams: {
                            search: stateProps.searchParams.search,
                            bookmark: bookmarks[page - 1],
                            pagesize: stateProps.searchParams.pagesize
                          },
                          currentPage: page
                        }
                      )
                    }}
                  />
                </>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }

  const doSearch = (searchTerm) => {
    bookmarks = [null];
    totalItems = 0;
    if (searchTerm)
      setAxiosStateProps(
        {
          searchParams: { search: searchTerm, bookmark: null, pagesize: pageSize },
          currentPage: 1
        });
    else
      setAxiosStateProps(
        {
          searchParams: { search: '', bookmark: null, pagesize: pageSize },
          currentPage: 1
        });
  }

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--condensed patients-list-tab">
      <div className="bx--row patients-list-tab__r1">
        <div className="bx--col-lg-5 bx--col-md-4">
          <SearchByEGN callback_getSearchTerm={(searchTerm)=>{doSearch(searchTerm)}}/>
        </div>
        <div className="bx--col-lg-2 bx--col-md-2">
          <Button onClick={() => {}}>Опресни</Button>
        </div>        
      </div>
      <div className="bx--row patients-list-tab__r2">
        <div className="bx--col-lg-16">
          <AxiosRequest />
        </div>
      </div>
    </div >
  );
};

export default PatientsListTab;