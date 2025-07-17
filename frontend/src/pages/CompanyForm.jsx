import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormLabel } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import InputField from '@/components/ui/custom/InputField'

const FormSchema = z.object({
  company_name_ar: z.string().nonempty("Company Name (Arabic) is required"),
  company_name_en: z.string().nonempty("Company Name (English) is required"),
  country_id: z.number({ required_error: "Country is required" }).min(1, "Country is required"),
  region: z.string().nonempty("Region is required"),
  city: z.string().nonempty("City is required"),
  district_ar: z.string().nonempty("District (Arabic) is required"),
  district_en: z.string().nonempty("District (English) is required"),
  street_ar: z.string().nonempty("Street (Arabic) is required"),
  street_en: z.string().nonempty("Street (English) is required"),
  building_number: z.union([z.string(), z.number()])
    .refine(val => val !== '', { message: "Building Number is required" }),
  additional_number: z.union([z.string(), z.number()])
    .refine(val => val !== '', { message: "Additional Number is required" }),
  floor_number: z.union([z.string(), z.number()])
    .refine(val => val !== '', { message: "Floor Number is required" }),
  office_number: z.string().nonempty("Office Number is required"),
  po_box: z.string().nonempty("PO Box is required"),
  zip_code: z.string().nonempty("Zip Code is required"),
  phone: z.string()
    .nonempty("Phone is required")
    .regex(/^\+?\d{7,15}$/, "Phone must be in international format"),
  email: z.string().email("Invalid email").optional(),
  website: z.string().url("Invalid website URL").optional(),
  whatsapp: z.string()
    .regex(/^\+?\d{7,15}$/, "WhatsApp number must be valid")
    .optional(),
  vat_number: z.string().nonempty("VAT Number is required"),
  cr_number: z.string().nonempty("CR Number is required"),
  nphies_id: z.string().optional(),
  address_ar: z.string().nonempty("Address (Arabic) is required"),
  address_en: z.string().nonempty("Address (English) is required"),
});


const countries = [
  {
    value: 1,
    label: "India"
  },
  {
    value: 2,
    label: "China"
  },
]

const defaultData = {
  company_name_ar: '',
  company_name_en: '',
  country_id: 0,
  region: '',
  city: '',
  district_ar: '',
  district_en: '',
  street_ar: '',
  street_en: '',
  building_number: '',
  additional_number: '',
  floor_number: '',
  office_number: '',
  po_box: '',
  zip_code: '',
  phone: '',
  vat_number: '',
  cr_number: '',
  nphies_id: '',
  address_ar: '',
  address_en: ''
}

const CompanyForm = ({ data, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: data || defaultData
  })

  return (
    <div className='p-4 md:px-12'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/2'>
              <InputField
                type="text"
                name="company_name_ar"
                label="Company Name (Arabic)"
                placeholder="Enter Company Name (Arabic)"
                defaultValue=""
              />
            </div>
            <div className='flex-1/2'>
              <InputField
                type="text"
                name="company_name_en"
                label="Company Name (English)"
                placeholder="Enter Company Name (English)"
                defaultValue=""
              />
            </div>
          </div>
          {/* <InputField
            type="select"
            name="country_id"
            label="Country"
            placeholder="Select Conntry"
            defaultValue={1}
            options={countries}
          /> */}
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/3'>
              <InputField
                type="combobox"
                name="country_id"
                label="Country"
                placeholder="Select Country"
                // multiSelect={true}
                // onChange={(e) => console.log(e)}
                options={countries}
              />
            </div>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="region"
                label="Region"
                placeholder="Enter Region"
                defaultValue=""
              />
            </div>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="city"
                label="City"
                placeholder="Enter City"
                defaultValue=""
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="district_ar"
                label="District (Arabic)"
                placeholder="Enter District (Arabic)"
                defaultValue=""
              />
            </div>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="district_en"
                label="District (English)"
                placeholder="Enter District (English)"
                defaultValue=""
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="street_ar"
                label="Street (Arabic)"
                placeholder="Enter Street (Arabic)"
                defaultValue=""
              />
            </div>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="street_en"
                label="Street (English)"
                placeholder="Enter Street (English)"
                defaultValue=""
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/2'>
              <InputField
                type="text"
                name="building_number"
                label="Building Number"
                placeholder="Enter Street (English)"
                defaultValue=""
              />
            </div>
            <div className='flex-1/2'>
              <InputField
                type="text"
                name="additional_number"
                label="Additional Number"
                placeholder="Enter Additional Number"
                defaultValue=""
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/2'>
              <InputField
                type="text"
                name="floor_number"
                label="Floor Number"
                placeholder="Enter Floor Number"
                defaultValue=""
              />
            </div>
            <div className='flex-1/2'>
              <InputField
                type="text"
                name="office_number"
                label="Office Number"
                placeholder="Enter Office Number"
                defaultValue=""
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/4'>
              <InputField
                type="text"
                name="po_box"
                label="PO Box"
                placeholder="Enter PO Box"
                defaultValue=""
              />
            </div>
            <div className='flex-1/4'>
              <InputField
                type="text"
                name="zip_code"
                label="Zip Code"
                placeholder="Enter Zip Code"
                defaultValue=""
              />
            </div>
            <div className='flex-1/4'>
              <InputField
                type="phone"
                name="phone"
                label="Phone"
                placeholder="Enter Phone Number"
                defaultValue=""
              />
            </div>
            <div className='flex-1/4'>
              <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/2'>
              <InputField
                type="url"
                name="website"
                label="Website"
                placeholder="Enter email"
              />
            </div>
            <div className='flex-1/2'>
              <InputField
                type="phone"
                name="whatsapp_number"
                label="WhatsApp Number"
                placeholder="Enter WhatsApp Number"
                defaultValue=""
              />
            </div>
          </div>
          <div className='flex gap-2 md:gap-8'>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="vat_number"
                label="VAT Number"
                placeholder="Enter VAT Number"
              />
            </div>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="cr_number"
                label="CR Number"
                placeholder="Enter Cr Number"
              />
            </div>
            <div className='flex-1/3'>
              <InputField
                type="text"
                name="nphies_id"
                label="NPHIES ID"
                placeholder="Enter NPHIES ID"
              />
            </div>
          </div>

          <InputField
            type="textarea"
            name="address_ar"
            label="Address (Arabic)"
            placeholder="Enter Address (Arabic)"
          />
          <InputField
            type="textarea"
            name="address_en"
            label="Address (English)"
            placeholder="Enter Address (English)"
          />
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </Form>
    </div>
  )
}

export default CompanyForm