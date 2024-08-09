import React from "react";
import "../css/style2.scss";
import { useState } from "react";
import Pediatr from "../images/images.jpeg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import covid from "../images/1583952355.1997 (1).png";
import doctor from "../images/d2724eb83ce272e88d17781e7dc800f0e1ae33f6adb394c51484840f.png";
import result from "../images/54d9be406d5776942c7a3031b4f2108df73f7d5c465b0b0e155a4195.jpeg";
import Diabetes from "../images/Diabetes-Mellitus (2).jpg";
import heart from "../images/41eb1aacc64a0715da457d397bdb4d4bdb700fa9f013beebbc13aa21.png";

const Predict = ({ formType }) => {
const [PredictCovid, setPredictCovid] = useState({
    sex: "",
    patient_type: "",
    intubed: "",
    pneumonia: "",
    age: "",
    pregnancy: "",
    diabetes: "",
    copd: "",
    asthma: "",
    inmsupr: "",
    hypertension: "",
    other_disease: "",
    cardiovascular: "",
    obesity: "",
    renal_chronic: "",
    tobacco: "",
    contact_other_covid: "",
    icu: "",
  });

  //const [result, setResult] = useState(null);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  const [CovidResult, setCovidResult] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  const handleChange = (e) => {
    setPredictCovid({ ...PredictCovid, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert PredictHeart object to an array of strings
      const inputData = Object.values(PredictCovid).map((value) =>
        value.toString()
      );

      const response = await axios.post(
        "https://localhost:44389/api/Prediction/PredictCovid",
        inputData
      );
      toast.success("Data submitted successfully");
      console.log("GET result response:", response);

      const data = response.data;
      toast.success("Result fetched successfully");

      // Assuming the POST response contains the prediction result directly as an array of floats
      setCovidResult(data); // Save the array of floats
      setPredictionResult(data); // Adjust based on your actual server response structure
    } catch (error) {
        console.error("Error predicting covid disease:", error);
        toast.error("Error predicting covid disease");
    }
};
  ////////////////////////////////////////////////////D
const [PredictDiabetes, setPredictDiabetes] = useState({
    HighBP: "",
    HighChol: "",
    CholCheck: "",
    BMI: "",
    Smoker: "",
    Stroke: "",
    HeartDiseaseorAttack: "",
    PhysActivity: "",
    Fruits: "",
    Veggies: "",
    HvyAlcoholConsump: "",
    AnyHealthcare: "",
    NoDocbcCost: "",
    GenHlth: "",
    MentHlth: "",
    PhysHlth: "",
    DiffWalk: "",
  });

  ///const [result2, setResult2] = useState(null);
  //const [loading2, setLoading2] = useState(false);
  //const [error2, setError2] = useState(null);
  const [DiabedtesResult, setDiabedtesResult] = useState(null);

  const handleChange2 = (e) => {
    setPredictDiabetes({
      ...PredictDiabetes,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      // Convert PredictHeart object to an array of strings
      const inputData = Object.values(PredictDiabetes).map((value) =>
        value.toString()
      );

      const response = await axios.post(
        "https://localhost:44389/api/Prediction/PredictDiabetes",
        inputData
      );
      toast.success("Data submitted successfully");
      console.log("GET result response:", response);

      const data = response.data;
      toast.success("Result fetched successfully");

      // Assuming the POST response contains the prediction result directly as an array of floats
      setDiabedtesResult(data); // Save the array of floats
      setPredictionResult(data); // Adjust based on your actual server response structure
    } catch (error) {
        console.error("Error predicting diabetes disease:", error);
        toast.error("Error predicting diabetes disease");
    }
};

  //////////////////////////////////////////////////////////H
  const [heartResult, setHeartResult] = useState(null);

  const [PredictHeart, setPredictHeart] = useState({
    age: "",
    sex: "",
    ChestPainType: "",
    RestingBP: "",
    Cholesterol: "",
    FastingBS: "",
    RestingECG: "",
    MaxHR: "",
    ExerciseAngina: "",
    Oldpeak: "",
    ST_Slope: "",
  });

  const handleChange3 = (e) => {
    setPredictHeart({ ...PredictHeart, [e.target.name]: e.target.value });
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      // Convert PredictHeart object to an array of strings
      const inputData = Object.values(PredictHeart).map((value) =>
        value.toString()
      );

      const response = await axios.post(
        "https://localhost:44389/api/Prediction/PredictHeart",
        inputData
      );
      toast.success("Data submitted successfully");
      console.log("GET result response:", response);

      const data = response.data;
      toast.success("Result fetched successfully");

      // Assuming the POST response contains the prediction result directly as an array of floats
      setHeartResult(data); // Save the array of floats
      setPredictionResult(data); // Adjust based on your actual server response structure
    } catch (error) {
      console.error("Error predicting heart disease:", error);
      toast.error("Error predicting heart disease");
    }
  };



  const renderForm = () => {
    switch (formType) {
      case "COVID-19":
        return (
          <div className="wrapper d-flex align-items-stretch">
            <ToastContainer />

            <nav id="sidebar" style={{ height: "auto", color: "white" }}>
              <div className="custom-menu">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-primary"
                >
                  <i className="fa fa-bars"></i>
                  <span className="sr-only">Toggle Menu</span>
                </button>
              </div>
              <div className="p-4">
                <div className="mb-5" style={{ color: "white" }}>
                  <h3 className="h6 mb-3">Feature Selection</h3>
                  <img src={covid} alt="Heart Prediction" />
                  <form
                    onSubmit={handleSubmit}
                    className="subscribe-form"
                    style={{ color: "white" }}
                  >
                    <label htmlFor="sex">sex:</label>
                    <select
                      id="sex"
                      name="sex"
                      value={PredictCovid.sex}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select sex</option>
                      <option value="1.0">Female</option>
                      <option value="2.0">Male</option>
                    </select>

                    <label htmlFor="patient_type">patient_type:</label>
                    <select
                      id="patient_type"
                      name="patient_type"
                      value={PredictCovid.patient_type}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select patient_type</option>
                      <option value="1.0">not hospitalized</option>
                      <option value="2.0">hospitalized</option>
                    </select>

                    <label htmlFor="intubed">intubed:</label>
                    <select
                      id="intubed"
                      name="intubed"
                      value={PredictCovid.intubed}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select intubed</option>
                      <option value="1.0">used ventilator</option>
                      <option value="2.0">not used ventilator</option>
                    </select>

                    <label htmlFor="pneumonia">pneumonia:</label>
                    <select
                      id="pneumonia"
                      name="pneumonia"
                      value={PredictCovid.pneumonia}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select pneumonia</option>
                      <option value="1.0">have air sacs inflammation</option>
                      <option value="2.0">
                        don't have air sacs inflammation
                      </option>
                    </select>

                    <label htmlFor="age">age:</label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      value={PredictCovid.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      className="form-control"
                      required
                    />

                    <label htmlFor="pregnancy">pregnancy:</label>
                    <select
                      id="pregnancy"
                      name="pregnancy"
                      value={PredictCovid.pregnancy}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select pregnancy</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="diabetes">diabetes:</label>
                    <select
                      id="diabetes"
                      name="diabetes"
                      value={PredictCovid.diabetes}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select diabetes</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="copd">copd:</label>
                    <select
                      id="copd"
                      name="copd"
                      value={PredictCovid.copd}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select copd</option>
                      <option value="1.0">
                        has Chronic obstructive pulmonary disease
                      </option>
                      <option value="2.0">
                        hasn't Chronic obstructive pulmonary disease
                      </option>
                    </select>

                    <label htmlFor="asthma">asthma:</label>
                    <select
                      id="asthma"
                      name="asthma"
                      value={PredictCovid.asthma}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select asthma</option>
                      <option value="1.0">has asthma disease</option>
                      <option value="2.0">hasn't asthma disease</option>
                    </select>

                    <label htmlFor="inmsupr">inmsupr:</label>
                    <select
                      id="inmsupr"
                      name="inmsupr"
                      value={PredictCovid.inmsupr}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select immunosuppressed</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="hypertension">hypertension:</label>
                    <select
                      id="hypertension"
                      name="hypertension"
                      value={PredictCovid.hypertension}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select hypertension</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="other_disease">other_disease:</label>
                    <select
                      id="other_disease"
                      name="other_disease"
                      value={PredictCovid.other_disease}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select other_disease</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="cardiovascular">cardiovascular:</label>
                    <select
                      id="cardiovascular"
                      name="cardiovascular"
                      value={PredictCovid.cardiovascular}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select heart or blood vessels related disease
                      </option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="obesity">obesity:</label>
                    <select
                      id="obesity"
                      name="obesity"
                      value={PredictCovid.obesity}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select obesity disease</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="renal_chronic">renal_chronic:</label>
                    <select
                      id="renal_chronic"
                      name="renal_chronic"
                      value={PredictCovid.renal_chronic}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select renal_chronic disease</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="tobacco">tobacco:</label>
                    <select
                      id="tobacco"
                      name="tobacco"
                      value={PredictCovid.tobacco}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select tobacco use</option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="contact_other_covid">
                      contact_other_covid:
                    </label>
                    <select
                      id="contact_other_covid"
                      name="contact_other_covid"
                      value={PredictCovid.contact_other_covid}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select contact_other_covid patient
                      </option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <label htmlFor="icu">icu:</label>
                    <select
                      id="icu"
                      name="icu"
                      value={PredictCovid.icu}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if had been admitted to an Intensive Care Unit
                      </option>
                      <option value="1.0">Yes</option>
                      <option value="2.0">No</option>
                    </select>

                    <input
                      type="submit"
                      value="Predict"
                      className="nav-link allBtn"
                      style={{
                        color: "white",
                        padding: "10px 50px",
                        backgroundColor: "#e12454 ",
                        marginTop: "20px",
                      }}
                    />
                  </form>
                </div>
              </div>
            </nav>
            <div id="content" className="p-4 p-md-5 pt-5">
              <h1 className="mb-4">COVID-19 Disease Prediction</h1>
              <h2>
                Are you wondering about the condition of your health? This app
                will help you to diagnose it!
              </h2>
              <div className="container">
                <div className="image-container">
                  <img src={doctor} alt="doctor" />
                  <p>
                    I'll help you diagnose your health! - Dr. Support Vector
                    Machine (SVC)
                  </p>
                </div>
                <div className="text-container">
                  <p>
                    Did you know that machine learning models can help you
                    predict COVID-19 disease pretty accurately? In this app, you
                    can estimate your chance of COVID-19 disease (yes/no) in
                    seconds!
                  </p>
                  <p>
                    Here, a Support Vector Machine (SVC) model was constructed
                    using survey data of over 300k US residents from the year
                    2020. This application is based on it because it has proven
                    to be better than the Logistic Regression (it achieves an
                    accuracy of about 69%, which is quite good).
                  </p>
                  <p>
                    To predict your COVID-19 disease status, simply follow the
                    steps below:
                    <br />
                    <br />
                    1-Enter the parameters that best describe you;
                    <br />
                    2-Press the "Predict" button and wait for the result.
                  </p>
                  <p className="impo">
                    Keep in mind that this result is not equivalent to a medical
                    diagnosis! This model would never be adopted by health care
                    facilities because of its less than perfect accuracy, so if
                    you have any problems, consult a human doctor.
                  </p>
                </div>
              </div>
             {CovidResult && (
    <div id="result" style={{ textAlign: "center" }}>
        {CovidResult[1] === 0 ? (
            <p>The probability that you'll have covid disease is <span id="accuracy">0%</span>.</p>
        ) : (
            CovidResult[1] === 1 && <p>The probability that you'll have covid disease is <span id="accuracy">100%</span>.</p>
        )}
    </div>
)}
    </div>
    </div>
        );
      case "Diabetes":
        return (
          <div className="wrapper d-flex align-items-stretch">
            <ToastContainer />

            <nav id="sidebar" style={{ height: "auto" }}>
              <div className="custom-menu">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-primary"
                >
                  <i className="fa fa-bars"></i>
                  <span className="sr-only">Toggle Menu</span>
                </button>
              </div>
              <div className="p-4">
                <div className="mb-5">
                  <h3 className="h6 mb-3">Feature Selection</h3>
                  <img src={Diabetes} alt="Diabetes Prediction" />
                  <form onSubmit={handleSubmit2} className="subscribe-form">
                    {/* Form fields go here */}
                    <label htmlFor="HighBP">HighBP:</label>
                    <select
                      id="HighBP"
                      name="HighBP"
                      value={PredictDiabetes.HighBP}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select HighBP</option>
                      <option value="0.0">NO HighBP</option>
                      <option value="1.0">YES HighBP</option>
                    </select>

                    <label htmlFor="HighChol">HighChol:</label>
                    <select
                      id="HighChol"
                      name="HighChol"
                      value={PredictDiabetes.HighChol}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select Highcholesterol</option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="CholCheck">CholCheck:</label>
                    <select
                      id="CholCheck"
                      name="CholCheck"
                      value={PredictDiabetes.CholCheck}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select cholesterol check in 5 years
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="BMI">BMI:</label>
                    <input
                      type="text"
                      id="BMI"
                      name="BMI"
                      value={PredictDiabetes.BMI}
                      onChange={handleChange2}
                      placeholder="Enter your Body Mass Index"
                      className="form-control"
                      required
                    />

                    <label htmlFor="Smoker">Smoker:</label>
                    <select
                      id="Smoker"
                      name="Smoker"
                      value={PredictDiabetes.Smoker}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if smoked at least 100 cigarettes in your life
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="Stroke">Stroke:</label>
                    <select
                      id="Stroke"
                      name="Stroke"
                      value={PredictDiabetes.Stroke}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select if had Stroke in brain</option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="HeartDiseaseorAttack">
                      HeartDiseaseorAttack:
                    </label>
                    <select
                      id="HeartDiseaseorAttack"
                      name="HeartDiseaseorAttack"
                      value={PredictDiabetes.HeartDiseaseorAttack}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select HeartDiseaseorAttack</option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="PhysActivity">PhysActivity:</label>
                    <select
                      id="PhysActivity"
                      name="PhysActivity"
                      value={PredictDiabetes.PhysActivity}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select PhysActivity in 30 days</option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="Fruits">Fruits:</label>
                    <select
                      id="Fruits"
                      name="Fruits"
                      value={PredictDiabetes.Fruits}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if eat 1 or more times per day
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="Veggies">Veggies:</label>
                    <select
                      id="Veggies"
                      name="Veggies"
                      value={PredictDiabetes.Veggies}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if eat 1 or more times per day
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="HvyAlcoholConsump">
                      HvyAlcoholConsump:
                    </label>
                    <select
                      id="HvyAlcoholConsump"
                      name="HvyAlcoholConsump"
                      value={PredictDiabetes.HvyAlcoholConsump}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select if drink Alcohol heavy</option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="AnyHealthcare">AnyHealthcare:</label>
                    <select
                      id="AnyHealthcare"
                      name="AnyHealthcare"
                      value={PredictDiabetes.AnyHealthcare}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if have any healthcare coverage
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="NoDocbcCost">NoDocbcCost:</label>
                    <select
                      id="NoDocbcCost"
                      name="NoDocbcCost"
                      value={PredictDiabetes.NoDocbcCost}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if in the last year want to see doctor and not
                        see doctor because cost
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <label htmlFor="GenHlth">GenHlth:</label>
                    <select
                      id="GenHlth"
                      name="GenHlth"
                      value={PredictDiabetes.GenHlth}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">Select general health</option>
                      <option value="1.0">excellent</option>
                      <option value="2.0">very good</option>
                      <option value="3.0">good</option>
                      <option value="4.0">fair</option>
                      <option value="5.0">poor</option>
                    </select>

                    <label htmlFor="MentHlth">MentHlth:</label>
                    <input
                      type="text"
                      id="MentHlth"
                      name="MentHlth"
                      value={PredictDiabetes.MentHlth}
                      onChange={handleChange2}
                      placeholder="Enter days of poor mental health scale 1-30 days"
                      className="form-control"
                      required
                    />

                    <label htmlFor="PhysHlth">PhysHlth:</label>
                    <input
                      type="text"
                      id="PhysHlth"
                      name="PhysHlth"
                      value={PredictDiabetes.PhysHlth}
                      onChange={handleChange2}
                      placeholder="Enter physical illness or injury scale 1-30 days"
                      className="form-control"
                      required
                    />

                    <label htmlFor="DiffWalk">DiffWalk:</label>
                    <select
                      id="DiffWalk"
                      name="DiffWalk"
                      value={PredictDiabetes.DiffWalk}
                      onChange={handleChange2}
                      className="form-control"
                      required
                    >
                      <option value="">
                        Select if have serious difficulty walking or climbing
                        stairs
                      </option>
                      <option value="0.0">NO</option>
                      <option value="1.0">YES</option>
                    </select>

                    <input
                      type="submit"
                      value="Predict"
                      className="nav-link allBtn"
                      style={{
                        color: "white",
                        padding: "10px 50px",
                        backgroundColor: "#e12454 ",
                        marginTop: "20px",
                      }}
                    />
                  </form>
                </div>
              </div>
            </nav>

            {/* Page Content */}
            <div id="content" className="p-4 p-md-5 pt-5">
              <h1 className="mb-4">Diabetes Disease Prediction</h1>
              <h2>
                Are you wondering about the condition of your health? This app
                will help you to diagnose it!
              </h2>
              <div className="container">
                <div className="image-container">
                  <img src={doctor} alt="doctor" />
                  <p>
                    I'll help you diagnose your health! - Dr. Support Fector
                    Machine (SVC)
                  </p>
                </div>
                <div className="text-container">
                  <p>
                    Did you know that machine learning models can help you
                    predict diabetes disease pretty accurately? In this app, you
                    can estimate your chance of diabetes disease (yes/no) in
                    seconds!
                  </p>
                  <p>
                    Here, a Support Vector Machine (SVC) model was constructed
                    using survey data of over 300k US residents from the year
                    2020. This application is based on it because it has proven
                    to be better than the Neural Network (it achieves an
                    accuracy of about 71%, which is quite good).
                  </p>
                  <p>
                    To predict your Diabetes disease status, simply follow the
                    steps below:
                  </p>
                  <p>
                    1- Enter the parameters that best describe you;
                    <br />
                    2- Press the "Predict" button and wait for the result.
                  </p>
                  <p className="impo">
                    Keep in mind that this result is not equivalent to a medical
                    diagnosis! This model would never be adopted by health care
                    facilities because of its less than perfect accuracy, so if
                    you have any problems, consult a human doctor.
                  </p>
                </div>
              </div>
              {DiabedtesResult && (
    <div id="result" style={{ textAlign: "center" }}>
        {DiabedtesResult[1] === 0 ? (
            <p>The probability that you'll have covid disease is <span id="accuracy">0%</span>.</p>
        ) : (
            DiabedtesResult[1] === 1 && <p>The probability that you'll have covid disease is <span id="accuracy">100%</span>.</p>
        )}
    </div>
)}
    </div>
    </div>
        );
            

      case "Heart":
        return (
          <div className="wrapper d-flex align-items-stretch">
            <ToastContainer />

            <nav id="sidebar">
              <div className="custom-menu">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-primary"
                >
                  <i className="fa fa-bars"></i>
                  <span className="sr-only">Toggle Menu</span>
                </button>
              </div>
              <div className="p-4">
                <div className="mb-5">
                  <h3 className="h6 mb-3">Feature Selection</h3>
                  <img src={heart} alt="Heart Prediction" />
                  <form onSubmit={handleSubmit3} className="subscribe-form">
                    <label htmlFor="age"> Age :</label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      placeholder="Enter your age"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.age}
                    />

                    <label htmlFor="sex">Sex:</label>
                    <select
                      id="sex"
                      name="sex"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.sex}
                    >
                      <option value="">Select Gender</option>
                      <option value="0.0"> F</option>
                      <option value="1.0">M </option>
                    </select>

                    <label htmlFor="ChestPainType">ChestPainType:</label>
                    <select
                      id="ChestPainType"
                      name="ChestPainType"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.ChestPainType}
                    >
                      <option value="">Select ChestPainType</option>
                      <option value="0.0"> ATA</option>
                      <option value="1.0"> NAP </option>
                      <option value="2.0"> ASY </option>
                      <option value="3.0"> TA </option>
                    </select>

                    <label htmlFor="RestingBP"> RestingBP :</label>
                    <input
                      type="text"
                      id="RestingBP"
                      name="RestingBP"
                      placeholder="Enter your RestingBP"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.RestingBP}
                    />

                    <label htmlFor="Cholesterol"> Cholesterol :</label>
                    <input
                      type="text"
                      id="Cholesterol"
                      name="Cholesterol"
                      placeholder="Enter your Cholesterol"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.Cholesterol}
                    />

                    <label htmlFor="FastingBS"> FastingBS :</label>
                    <select
                      id="FastingBS"
                      name="FastingBS"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.FastingBS}
                    >
                      <option value="">Select fasting blood sugar</option>
                      <option value="0.0"> NO</option>
                      <option value="1.0"> YES </option>
                    </select>

                    <label htmlFor="RestingECG">RestingECG:</label>
                    <select
                      id="RestingECG"
                      name="RestingECG"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.RestingECG}
                    >
                      <option value="">Select RestingECG</option>
                      <option value="1.0"> Normal</option>
                      <option value="2.0"> ST </option>
                      <option value="0.0"> LVH </option>
                    </select>

                    <label htmlFor="MaxHR"> MaxHR :</label>
                    <input
                      type="text"
                      id="MaxHR"
                      name="MaxHR"
                      placeholder="Enter your MaxHR"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.MaxHR}
                    />

                    <label htmlFor="ExerciseAngina">ExerciseAngina :</label>
                    <select
                      id="ExerciseAngina"
                      name="ExerciseAngina"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.ExerciseAngina}
                    >
                      <option value="">Select ExerciseAngina </option>
                      <option value="0.0"> N</option>
                      <option value="1.0"> Y </option>
                    </select>

                    <label htmlFor="Oldpeak"> Oldpeak :</label>
                    <input
                      type="text"
                      id="Oldpeak"
                      name="Oldpeak"
                      placeholder="Enter your Oldpeak"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.Oldpeak}
                    />

                    <label htmlFor="ST_Slope">ST_Slope :</label>
                    <select
                      id="ST_Slope"
                      name="ST_Slope"
                      className="form-control"
                      onChange={handleChange3}
                      value={PredictHeart.ST_Slope}
                    >
                      <option value="">Select ST_Slope </option>
                      <option value="2.0"> Up</option>
                      <option value="1.0"> Flat </option>
                      <option value="0.0"> Down </option>
                    </select>
                    <input
                      type="submit"
                      value="Predict"
                      className="nav-link allBtn"
                      style={{
                        color: "white",
                        padding: "10px 50px",
                        backgroundColor: "#e12454 ",
                        marginTop: "20px",
                      }}
                    />
                  </form>
                </div>
              </div>
            </nav>

            <div id="content" className="p-4 p-md-5 pt-5">
              <h1 className="mb-4">Heart Disease Prediction</h1>
              <h2>
                Are you wondering about the condition of your heart? This app
                will help you to diagnose it!
              </h2>
              <div className="container">
                <div className="image-container">
                  <img src={doctor} alt="doctor" />
                  <p>
                    I'll help you diagnose your heart health! - Dr. Logistic
                    Regression
                  </p>
                </div>
                <div className="text-container">
                  <p>
                    Did you know that machine learning models can help you
                    predict heart disease pretty accurately? In this app, you
                    can estimate your chance of heart disease (yes/no) in
                    seconds!
                  </p>
                  <p>
                    Here, a logistic regression model was constructed using
                    survey data of over 300k US residents from the year 2020.
                    This application is based on it because it has proven to be
                    better than the Neural Network (it achieves an accuracy of
                    about 86%, which is quite good).
                  </p>
                  <p>
                    To predict your heart disease status, simply follow the
                    steps below:
                  </p>
                  <p>
                    1-Enter the parameters that best describe you;
                    <br />
                    2-Press the "Predict" button and wait for the result.
                  </p>
                  <p className="impo">
                    Keep in mind that this result is not equivalent to a medical
                    diagnosis! This model would never be adopted by healthcare
                    facilities because of its less than perfect accuracy, so if
                    you have any problems, consult a human doctor.
                  </p>
                </div>
              </div>
              {heartResult && (
    <div id="result" style={{ textAlign: "center" }}>
        {heartResult[1] === 0 ? (
            <p>The probability that you'll have heart disease is <span id="accuracy">0%</span>.</p>
        ) : (
            heartResult[1] === 1 && <p>The probability that you'll have heart disease is <span id="accuracy">100%</span>.</p>
        )}
    </div>
)}

            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=5ded9b4"
      />
      <style>
        {`@media print {
                * {
                    -webkit-print-color-adjust: exact !important;
                    color-adjust: exact !important;
                }
                .form-section {
                    display: inline !important
                }
                .form-pagebreak {
                    display: none !important
                }
                .form-section-closed {
                    height: auto !important
                }
                .page-section {
                    position: initial !important
                }
            }`}
      </style>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.50539&themeRevisionID=63e6805f64383509e31513f4"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.50539"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.50539"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn02.jotfor.ms/stylebuilder/static/donationBox.css?v=3.3.50539"
      />
      <div>{renderForm()}</div>
    </div>
  );
};

export default Predict;
