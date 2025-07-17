import React from 'react'
import CompanyForm from './CompanyForm'
import axiosInstance from '@/config/http.config';

const AddCompany = () => {
  
  const createCompany = async (data) => {
    const payload = {
      ...data,
      country_id: parseInt(data.country_id)
    };
    console.log(payload);
    try {
      const result = await axiosInstance.post(`/company-settings/`, payload);      
      if(result?.data){
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='p-4 mt-5'>
      <h2 className='text-3xl mb-5 font-bold text-center'>Add New Company</h2>
      <CompanyForm onSubmit={createCompany} />
    </div>
  )
}

export default AddCompany