import axios from 'axios'
import React, { useEffect } from 'react'
import DynamicNavlist from './components/DynamicNav';
import "./index.css"

// const async fetchData = () => {
//     return axios.get('http://cms.dev.cynfusion.net/jsonapi/node/dynamic_menu').then((res) => {
//         console.log(res);
//     }).catch((err) => alert(err))
// }

async function fetchData() {
    try {
      const response = await axios.get('http://cms.dev.cynfusion.net/jsonapi/node/dynamic_menu');
      console.log("axios--res -->", response);
    } catch (error) {
      console.error(error);
    }
  }

function DynamicHeader() {


    useEffect(() => {
        fetchData();
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div className="dynamicHeader" >
            <div className="dynamicHeader__logo">
                <span>Odyssey</span>
            </div>
            <DynamicNavlist />
        </div>
    )
}

export default DynamicHeader
