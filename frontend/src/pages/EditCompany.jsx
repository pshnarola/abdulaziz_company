import React, { useEffect, useState } from 'react'
import CompanyForm from './CompanyForm'
import { useParams } from 'react-router-dom'
import axiosInstance from '@/config/http.config';

const EditCompany = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState();

  const getData = async () => {
    const result = await axiosInstance.get(`/company-settings/${id}`);
    console.log(result);   
    if(result?.data){
      setCompanyData(result?.data)
      console.log(result?.data);        
    }      
  }

  const updateData = async (data) => {
    const payload = {
        ...data,
        country_id: parseInt(data.country_id)
      };
      console.log(payload);
      
    try {
      const result = await axiosInstance.put(`/company-settings/${id}`, payload);      
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='p-4 mt-5'>
      <h2 className='text-3xl mb-5 font-bold text-center'>Edit Company</h2>
      {companyData && (
        <CompanyForm data={companyData} onSubmit={updateData} />
      )}
    </div>
  )
}

export default EditCompany