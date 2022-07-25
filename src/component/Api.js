import React from 'react'
import axios from "axios";


const Api = () => {

    var params = {
        services: {
            check_login: {route: 'user/check_mpin/',method:'POST'},
            dashboard: {route: 'dashboard/view',method:'POST'},
        }
      };  

      var BASE_URL = 'https://echofounder.com/inquiry/';

      const call = (check_login, payload = {}, param1 = '', param2 = '') => {

        let route = params.services[check_login].route;
        if (param1 != '') {
          route = route + '/' + param1;
        }
        if (param2 != '') {
          route = route + '/' + param2;
        }
        let callingURL = BASE_URL + route;



        let response;
        alert(JSON.stringify(postData));
        response = axios.post(`${callingURL}`, postData).then(handleResponse).catch(handleError);
        response = JSON.parse(response);
        return response;
      };
  return (
    <>

    </>
  )
}

export default Api