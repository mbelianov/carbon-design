import React from 'react';

import {
  DatePicker, DatePickerInput, TextInput, TextArea
} from 'carbon-components-react';



const UzdForm = (props) => {

  return (
    <>
        <div className="bx--row bx--row-padding">
          <div className="bx--col">
            <h2 className='exam-title'>УЛТРАЗВУКОВА ПPЕНАТАЛНА ДИАГНОСТИКА</h2><hr></hr>
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5  bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="prm"
                placeholder="dd/mm/yyyy"
                labelText="Последна редовна меструация"
                type="text"
                onSelect={props.handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5 bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="date"
                placeholder="dd/mm/yyyy"
                labelText="Дата УЗИ"
                type="text"
                onSelect={props.handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-3 bx--col-xlg-2 bx--col-max-2">
            <TextInput
              id="gv-po-prm"
              invalidText="A valid value is required"
              labelText="ГВ по ПРМ"
              placeholder="г.с. + д"
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5  bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="vtr"
                placeholder="dd/mm/yyyy"
                labelText="Вероятен термин на разждане"
                type="text"
                onSelect={props.handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 bx--col-xlg-5 bx--col-max-4">
            <DatePicker dateFormat="d/m/Y" datePickerType="single">
              <DatePickerInput
                id="korigiran-vtr"
                placeholder="dd/mm/yyyy"
                labelText="Коригиран ВТР"
                type="text"
                onSelect={props.handleChange}
              />
            </DatePicker>
          </div>
          <div className="bx--col-sm-2 bx--col-md-2 bx--col-lg-3 bx--col-xlg-2 bx--col-max-2">
            <TextInput
              id="age"
              invalidText="A valid value is required"
              labelText="Години"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="anamneza"
              invalidText="A valid value is required"
              labelText="Акушерска анамнеза"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
            <TextInput
              id="obremenenost"
              invalidText="A valid value is required"
              labelText="Фамилна обремененост"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="predlezhanie"
              invalidText="A valid value is required"
              labelText="Предлежание"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
            <TextInput
              id="dvizhenie-na-ploda"
              invalidText="A valid value is required"
              labelText="Движение на плода"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="placenta"
              invalidText="A valid value is required"
              labelText="Плацента"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-12 bx--col-xlg-12 bx--col-max-12">
            <TextInput
              id="papna-vrav"
              invalidText="A valid value is required"
              labelText="Пъпна връв"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput
              id="sex"
              invalidText="A valid value is required"
              labelText="Пол"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-3 bx--col-lg-3 bx--col-xlg-3 bx--col-max-3">
            <TextInput
              id="heart-rate"
              invalidText="A valid value is required"
              labelText="Сърдечна честота"
              placeholder=""
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col">
            <h5 className='exam-subtitle'>Биометрия</h5>
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="bpd" invalidText="A valid value is required" labelText="BPD[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="ofd" invalidText="A valid value is required" labelText="OFD[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="hc" invalidText="A valid value is required" labelText="HC[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="vp" invalidText="A valid value is required" labelText="Vp[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="tcd" invalidText="A valid value is required" labelText="TCD[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="cm" invalidText="A valid value is required" labelText="CM[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="nf" invalidText="A valid value is required" labelText="NF[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="nb" invalidText="A valid value is required" labelText="NB[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="apad" invalidText="A valid value is required" labelText="APAD[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="tad" invalidText="A valid value is required" labelText="TAD[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="ac" invalidText="A valid value is required" labelText="AC[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="fl" invalidText="A valid value is required" labelText="FL[mm-г.с.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="efw" invalidText="A valid value is required" labelText="EFW[gr.]" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="la" invalidText="A valid value is required" labelText="LA" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="lc" invalidText="A valid value is required" labelText="LC" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col">
            <h5 className='exam-subtitle'>Анатомия на плода</h5>
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="head" invalidText="A valid value is required" labelText="Глава" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="brain" invalidText="A valid value is required" labelText="Мозък" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="face" invalidText="A valid value is required" labelText="Лице" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="neck-skin" invalidText="A valid value is required" labelText="Шия/кожа" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="chest-1" invalidText="A valid value is required" labelText="Гр. стълб" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="chest-2" invalidText="A valid value is required" labelText="Гр. кош" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="heart" invalidText="A valid value is required" labelText="Сърце" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="belly" invalidText="A valid value is required" labelText="Корем" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="kidny" invalidText="A valid value is required" labelText="Бъбреци" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="legs" invalidText="A valid value is required" labelText="Крайници" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 bx--col-xlg-3  bx--col-max-3">
            <TextInput id="skeleton" invalidText="A valid value is required" labelText="Скелет" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="dex-pi" invalidText="A valid value is required" labelText="A. ut. Dex PI" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="dex-ri" invalidText="A valid value is required" labelText="A. ut. Dex RI" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="sin-pi" invalidText="A valid value is required" labelText="A. ut. Sin PI" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="sin-ri" invalidText="A valid value is required" labelText="A. ut. Sin RI" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="umb-pi" invalidText="A valid value is required" labelText="A. Umb. PI" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="umb-ri" invalidText="A valid value is required" labelText="A. Umb. RI" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="cma-pi" invalidText="A valid value is required" labelText="CMA PI" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="cma-psv" invalidText="A valid value is required" labelText="CMA PSV[mm/sec]" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="cpr" invalidText="A valid value is required" labelText="CPR" placeholder="" onChange={props.handleChange} />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4  bx--col-max-4">
            <TextInput id="duc-ven" invalidText="A valid value is required" labelText="Duc. Ven.[mm/sec]" placeholder="" onChange={props.handleChange} />
          </div>
        </div>

        <div className="bx--row bx--row-padding">
          <div className="bx--col">
            <TextArea id="comment" invalidText="A valid value is required" labelText="Коментар" placeholder="" onChange={props.handleChange} />
          </div>
        </div>
    </>
  )
}

export default UzdForm;