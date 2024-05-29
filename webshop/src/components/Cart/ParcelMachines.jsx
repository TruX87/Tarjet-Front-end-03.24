import React, { useEffect, useRef, useState } from 'react'
import {Spinner} from "react-bootstrap";

function ParcelMachines() {
    const [parcelmachines, setParcelmachines] = useState([]);
    const [dbparcelmachines, setDbParcelmachines] = useState([]);
    const [selectedPM, setSelectedPM] = useState("");  // {} - üks valik.  [] - terve valik
    const pmRef = useRef();
    const pmSearchRef = useRef();
    const [isLoading, setIsLoading] = useState(true);

  // uef +enter
  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(response => response.json())
      .then(json => {
        setParcelmachines(json);
        setDbParcelmachines(json);
        setIsLoading(false);
      })
  }, []);

  function selectPM() {
    setSelectedPM(pmRef.current.value);
    pmSearchRef.current.value = "";
    searchFromPMs();
  }

  function searchFromPMs() {
    const result = dbparcelmachines.filter(pm => 
      pm.NAME.toLowerCase().includes(pmSearchRef.current.value.toLowerCase())
    );
    setParcelmachines(result);
  }

  function deleteSelected() {
    setSelectedPM("");
    
  }

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
          {selectedPM === "" && 
          <React.Fragment>
            <br />
            <input 
            placeholder="Search Parcelmachines" 
            onChange={searchFromPMs} 
            ref={pmSearchRef} 
            type="text" />
            <br />
          <select
            onChange={selectPM}
            ref={pmRef}
          >
            <option>-Select Parcelmachine-</option>
            {parcelmachines
            .filter(pm => pm.A0_NAME === "EE")
            .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
            </select>
            </React.Fragment>
            }
            {selectedPM !== "" && <div>Selected Parcelmachine: {selectedPM} 
            <button onClick={deleteSelected}>x</button></div>}
    </div>
  )
}

export default ParcelMachines