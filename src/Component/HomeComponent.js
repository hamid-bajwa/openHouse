import React, { useState,useEffect } from "react";
import Select from "react-select";
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
} from "reactstrap";
import "./css/HomeComponent.css";
import SearchDropdown from "./css/SearchDropdown";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const Sectoroptions = [
    { value: "Public", label: "Public" },
    { value: "Private", label: "Private" },
  ];

 
  const [cityoptions, setCityOptions] = useState([]);
  const [nameOptions, setNameOptions] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8000/filters",{
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },  
    })
        .then(res => res.json())
        .then(data => {
          const cityData = data.city.map((item) => {
            return { value: item.city, label: item.city };
          });
          setCityOptions(cityData);
          const nameData = data.name.map((item) => {
            return { value: item.name, label: item.name };
          });
          setNameOptions(nameData);
        }) 
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
      borderRadius: '50px',
      border: "2px solid #FFCA2C;",
      boxShadow: "none",
    }),
    placeholder: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#fff",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
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
                  <input
                    className="form-control input"
                    type="text"
                    placeholder="University Name"
                  ></input>
                </form>
              </div>
            </div>

            {/* City, major , degree level */}

            <div className="row mb-3 justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <form className="justify-content-center ">
                  
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder='City'
                  defaultValue={"City"}
                  isClearable={isClearable}
                  name="city"
                  options={cityoptions}
                  styles={styleSheet}
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
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder='Scholarship Name'
                  defaultValue={"sector"}
                  isClearable={isClearable}
                  name="sector"
                  options={nameOptions} 
                  styles={styleSheet}/>
                  {/* <input
                    className="form-control input"
                    type="text"
                    placeholder="Scholarship Name"
                  ></input> */}
                  {/* <label class="label" for="form1">Major</label> */}
                </form>
              </div>

              <div className="col-12 col-sm-  col-md-4 col-lg-3 mb-3 flex">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder='Sector'
                  defaultValue={"sector"}
                  isClearable={isClearable}
                  name="sector"
                  options={Sectoroptions} 
                  styles={styleSheet}
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
              </div>
            </div>

            {/* Submit buttons */}
            <Row className="mb-3 ">
              <Col className="d-flex justify-content-center">
                <Button className="btn  btn-warning px-5 " type="submit">
                  Search
                </Button>
              </Col>

              {/* <Col>
                <Button
                  className="btn btn-warning px-4"
                  id="personalizedSearch"
                  onClick={toggle}
                >
                  Filter search
                </Button>
              </Col> */}
            </Row>

            {/* personalized Searched */}
            {/* <Row>
              <Collapse isOpen={isOpen}>
                <div className="row mb-3 justify-content-center">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <form className="justify-content-center ">
                      <input
                        className="form-control input"
                        type="text"
                        placeholder="University Name"
                      ></input>
                       <label class="label" for="form1">City</label> 
                    </form>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <form className="justify-content-center ">
                      <input
                        className="form-control input"
                        type="text"
                        placeholder="Cgpa"
                      ></input>
                      <label class="label" for="form1">Major</label> 
                    </form>
                  </div>
                </div>
              </Collapse>
            </Row> */}
          </div>
        </div>
      </div>

      {/* Card div */}
      <div className="container-fluid">
        <hr className="hr" />
        <div className="SearchResult">
          <p className="p p-2">Number Of scholarships :</p>

          <Row>
            <Col xs="1" sm="2" md="3" lg="3" />
            <Col xs="10" sm="8" md="6" lg="6">
              <Card className="card ">
                <CardBody>
                  <CardTitle tag="h5">University Name</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                  location
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error expedita ab quas voluptatum, autem ex non facere
                    repellendus beatae? Fuga repudiandae ipsum commodi dolor
                    totam numquam possimus velit suscipit eos!
                  </CardText>
                  <CardSubtitle className="mt-2 mb-2 text-muted" tag="h6">
                    Requirment
                  </CardSubtitle>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button className="btn-warning btn text-right">
                      Apply here <i class="fa-solid fa-link "></i>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="2" />
          </Row>
          <br />
        </div>
      </div>
    </>
  );
}

// function RenderPersonalizedSearch() {
//   return (
//     <div className="">
//       <Button>hi</Button>
//     </div>
//   );
// }
export default Home;
