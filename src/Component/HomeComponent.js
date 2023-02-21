import React, { useState, useEffect } from "react";
import Select from "react-select";
import $ from "jquery";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Col,
  Row,
  Collapse,
  CardHeader,
} from "reactstrap";
import "./css/HomeComponent.css";
import SearchDropdown from "./css/SearchDropdown";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [Scholarshipdata, setScholarshipdata] = useState([]);
  const [isclick, setisclick] = useState(false);

  const Sectoroptions = [
    { value: "public", label: "public" },
    { value: "private", label: "private" },
  ];
  const [cityoptions, setCityOptions] = useState([]);
  const [ScholarshipNameOptions, setScholarshipNameOptions] = useState([]);
  const [UniNameOptions, setUniNameOptions] = useState([]);
  const [SeverSideError, setSeverSideError] = useState(null);

  const [uniName, setUniName] = useState([]);
  const [city, setCity] = useState([]);
  const [scholarship_name, setScholarship_name] = useState([]);
  const [sector, setSector] = useState([]);

  const handleClick = async (event) => {
    // const uniName= $("#uniName :selected").text();
    // alert(uniName)
    // const city=$("#city option:selected").text();
    // alert(city)
    // const scholarship_name=$("#scholarship_name").val();
    // const sector=$("#sector").val();
    const selectedUniName = uniName ? uniName.value : null;
    const selectedCity = city ? city.value : null;
    const selectedSector = sector ? sector.value : null;
    const selectedScholarshipName = scholarship_name
      ? scholarship_name.value
      : null;

    try {
      const response = await fetch("http://127.0.0.1:8000/scholarships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedUniName,
          selectedCity,
          selectedScholarshipName,
          selectedSector,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        // throw new Error(data.message);
        // alert(data.message);
        // setSeverSideError(data.message);
      } else {
        if (data.status) {
          setisclick(true);
          setScholarshipdata(data.data.data);
        }
        else{ 
          // alert(data.message);
          setScholarshipdata([])
          setSeverSideError(data.message);

        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/filters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const cityData = data.city.map((item) => {
          return { value: item.city, label: item.city };
        });
        setCityOptions(cityData);

        const scholarshipData = data.headings.map((item) => {
          return {
            value: item.scholarshipHeading,
            label: item.scholarshipHeading,
          };
        });
        setScholarshipNameOptions(scholarshipData);

        const UniNameData = data.name.map((item) => {
          return { value: item.name, label: item.name };
        });
        setUniNameOptions(UniNameData);
      });
  }, []);
  const toggle = () => setIsOpen(!isOpen);

  const styleSheet = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,

      color: state.isSelected ? "#212529" : "#000000",
      backgroundColor: state.isSelected ? "#374661" : "",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      borderRadius: "50px",
      border: "2px solid #FFCA2C;",
      boxShadow: "none",
    }),
    placeholder: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#fff",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  const handleChangeUniName = (selectedOption) => {
    setSeverSideError("");
    setUniName(selectedOption);
  };
  const handleChangeCity = (selectedOption) => {
    setSeverSideError("");
    setCity(selectedOption);
  };
  const handleChangeScholarshipName = (selectedOption) => {
    setSeverSideError("");
    setScholarship_name(selectedOption);
  };
  const handleChangeSector = (selectedOption) => {
    setSeverSideError("");

    setSector(selectedOption);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="searchContainer">
          <div className="p-4 pt-5">
            {/* Search */}
            <div className="row mb-3 justify-content-center">
              <div className="col-12 col-sm-8 col-md-8 col-lg-4 ">
                <form className="justify-content-center ">
                  {/*                       
                     <label class="label" for="form1">Search?</label> */}
                  {/* <input
                    className="form-control input"
                    type="text"
                    placeholder="University Name"
                  ></input> */}
                  <Select
                    id="uniName"
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="University Name"
                    defaultValue="sector"
                    isClearable={isClearable}
                    name="sector"
                    options={UniNameOptions}
                    onChange={handleChangeUniName}
                    styles={styleSheet}
                    value={uniName}
                  />
                </form>
              </div>
            </div>

            {/* City, major , degree level */}

            <div className="row mb-3 justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <form className="justify-content-center ">
                  <Select
                    id="city"
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="City"
                    defaultValue={"City"}
                    isClearable={isClearable}
                    name="city"
                    options={cityoptions}
                    styles={styleSheet}
                    onChange={handleChangeCity}
                    value={city}
                    // theme={(theme) => ({
                    //   ...theme,
                    //   borderRadius: '40px',
                    //   colors: {
                    //     ...theme.colors,
                    //     primary25: '#374661',
                    //     primary: '#374661',
                    //     neutral0:'white',
                    //     neutral5:'#374661',
                    //     neutral30:""
                    //   },
                    // })}
                  />
                  {/* <label class="label" for="form1">City</label> */}
                </form>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <form className="justify-content-center ">
                  <Select
                    id="scholarship_name"
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Scholarship Name"
                    defaultValue={"sector"}
                    isClearable={isClearable}
                    options={ScholarshipNameOptions}
                    onChange={handleChangeScholarshipName}
                    styles={styleSheet}
                    value={scholarship_name}
                  />
                </form>
              </div>

              <div className="col-12 col-sm-  col-md-4 col-lg-3 mb-3 flex">
                <Select
                  id="sector"
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Sector"
                  defaultValue={"sector"}
                  isClearable={isClearable}
                  name="sector"
                  onChange={handleChangeSector}
                  options={Sectoroptions}
                  styles={styleSheet}
                  value={sector}
                />
              </div>
            </div>

            {/* Submit buttons */}
            <Row className="mb-3 ">
              <Col className="d-flex justify-content-center">
                <Button
                  className="btn  btn-warning px-5 "
                  type="submit"
                  onClick={handleClick}
                >
                  Search
                </Button>
              </Col>
            </Row>

          </div>
        </div>
      </div>

      {/* Card div */}
      <div className="container-fluid">
        <hr className="hr" />


        <div className="SearchResult py-5 ">
         <center>
           {SeverSideError && (
            <div className="mb-2" style={{ color: "red" , fontSize :"25px" }}>
              {SeverSideError}
            </div>
          )}
          </center>
          <center>
          {Scholarshipdata.length >0 ? <p className="p p-2" style={{  fontSize :"25px" }}>
           Universities Found : {Scholarshipdata.length}{" "}
          </p> :"" }
          </center>
          {isclick &&
            Scholarshipdata.map((item) => (
              <Row className="mb-3">
                <Col xs="1" sm="2" md="3" lg="3" />
                <Col xs="10" sm="8" md="6" lg="6">
                  <Card className="card ">
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {item.city}
                      </CardSubtitle>
                      <CardSubtitle className="mt-2 mb-2 text-muted" tag="h6">
                        {item.sector}
                      </CardSubtitle>
                      <CardHeader>Offered Scholarships</CardHeader>
                      <CardText>
                        <ol>
                          {item.scholarships.map((scholarship) => (
                          <li><p>{scholarship.scholarship_name}</p></li>
                        ))}
                        </ol>
                        {/* {item.scholarships.scholarship_namescholarships} */}
                      </CardText>
                      
                      <CardSubtitle className="mt-2 mb-2 text-muted" tag="h6">
                      <i class="fa-solid fa-phone"></i> <t/>
                        {item.contact}
                      </CardSubtitle>
                      <CardSubtitle className="mt-2 mb-2 text-muted" tag="h6">
                        <i class="fa-solid fa-at"></i> <t/>
                        {item.email.lenth === 4 ? "Not avaible" : item.email}{" "}
                      </CardSubtitle>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button className="btn-warning btn text-right">
                         
                          <a href={item.url} target="_blank">Website link </a>
                          <i class="fa-solid fa-up-right-from-square"></i>
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="2" />
              </Row>
            ))}
          <br />
        </div>
      </div>
    </>
  );
}

export default Home;
