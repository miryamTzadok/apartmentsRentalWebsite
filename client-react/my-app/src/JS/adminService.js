import axios from "axios"

const basisUrl="http://localhost:3002/"  
   
    export const addAdvertiser = (advertiser) => {
        debugger
        return axios.post(`${basisUrl}advertiser`,advertiser)
    }
    export const advertiserByEmailPassword = (advertiser) => {
        return axios.post(`${basisUrl}advertiser/advertiserByEmailPassword`,advertiser)
    }
    export const addCustomer = (customer) => {
        return axios.post(`${basisUrl}customer`,customer)
    }
    export const customerByEmailPassword = (customer) => {
        return axios.post(`${basisUrl}customer/customerByEmailPassword`,customer)
    }
