"use client";

import AutocompleteAddress from "@/components/formElements/AutocompleteAddress";
import CompleteFileUpload from "@/components/formElements/CompleteFileUpload";
import CustomButton from "@/components/formElements/CustomButton";
import CustomFileUpload from "@/components/formElements/CustomFileUpload";
import InputField from "@/components/formElements/InputField";
import SelectInputField from "@/components/formElements/SelectInputField";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MintPropertyNftForm = () => {
  const [loading, setLoading] = useState(false);
  const [selectProperty, setSelectProperty] = useState(() => ({
    label: "No",
  }));
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [uploadingEntity, setUploadingEntity] = useState(false);
  const [settlementStatment, setSettlementStatement] = useState("");
  const [uploadingSettlement, setUploadingSettlement] = useState(false);
  const [entityName, setEntityName] = useState("");
  const [address, setAddress] = useState("");
  const [houseUrl, setHouseUrl] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [entityDocument, setEntityDocument] = useState(null);
  const [propertyCategoryOptions, setPropertyCategoryOptions] = useState([
    { value: true, label: "No" },
    { value: false, label: "Yes" },
  ]);
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const [minPropertyData, setMinPropertyData] = useState({
    address: "",
    agentId: "",
    description: "description",
    docCategory: "settlement",
    document: settlementStatment,
    image: houseUrl,
    name: "",
    price: 50,
    title: "",
    practitioner_id: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMinPropertyData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  useEffect(() => {
    setMinPropertyData((prev) => {
      return {
        ...prev,
        ...(selectProperty?.label === "Yes" && {
          companyName: entityName,
          company_document: entityDocument,
        }),
        image: houseUrl,
        document: settlementStatment,
        address: selectedAddress && selectedAddress,
      };
    });

    if (selectProperty?.label === "No") {
      delete minPropertyData.companyName;
      delete minPropertyData.company_document;
    }
    // eslint-disable-next-line
  }, [
    selectProperty,
    houseUrl,
    entityDocument,
    settlementStatment,
    selectedAddress,
    entityName,
  ]);

  return (
    <>
      {/* {viewPractitionerDetail && (
    <SinglePractitionerDetailPopup
      practitionerData={selectedPractitoner}
      setViewPractitionerDetail={setViewPractitionerDetail}
    />
  )}
  {showPaymentCard && (
    <PaymentPopup
      mintNFTData={data}
      setShowPaymentCard={setShowPaymentCard}
    />
  )} */}
      <div className="py-4 w-full px-10">
        <h1 className="mb-5 text-heading-xs sm:text-heading-sm font-semibold lg:text-heading-lg leading-[18px] sm:leading-[44px] text-black">
          Mint Property NFT
        </h1>

        <div className="bg-primary p-[1px] rounded-[24px]">
          <div className="bg-white w-full py-10 px-[12%] lg:px-[201px] xl:px-[250px] rounded-[24px]">
            <form className="flex flex-col gap-5">
              <h2 className="text-heading-xs sm:text-heading-sm font-semibold md:text-heading-lg text-black">
                Step One: Property Information
              </h2>
              <InputField
                inputType="text"
                labelName="Name"
                inputId="name"
                inputPlaceholder="Enter the exact name"
                grayText="Exact Legal name on Government ID"
                inputName="name"
                inputValue={minPropertyData.name}
                inputOnChangeFunc={handleChange}
              />
              <SelectInputField
                labelName="Property:"
                grayText="Is this property in a trust, LLC, or business entity?"
                dropdownList={propertyCategoryOptions}
                initialValue={"No"}
                inputOnChangeFunc={handleChange}
                selected={selectProperty}
                setSelected={setSelectProperty}
              />
              {selectProperty?.label === "Yes" && (
                <>
                  <InputField
                    inputType="text"
                    labelName="Entity Name:"
                    inputId="entityName"
                    inputPlaceholder="Enter the entity name"
                    grayText="Exact name of trust, LLC, or business entity"
                    inputName="companyName"
                    inputValue={minPropertyData?.companyName}
                    inputOnChangeFunc={(e) => setEntityName(e.target.value)}
                  />
                  <CompleteFileUpload
                    labelName="Upload a legal document for entity:"
                    grayText="Files types supported: JPG/PNG/PDF (Max Size: 100 MB)"
                    s3Url={entityDocument}
                    setS3Url={setEntityDocument}
                    uploadingToS3={uploadingEntity}
                    setUploadingToS3={setUploadingEntity}
                    editFilePayload={minPropertyData?.company_document_preview}
                    formId={1}
                    maxFileSize={100}
                    fileType="application/pdf"
                    allowPdf={true}
                    property={true}
                    privateBucket={true}
                  />
                </>
              )}
              <AutocompleteAddress
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
                // setLatLngPlusCode={setLatLngPlusCode}
                address={address}
                setAddress={setAddress}
                setSelectedProvince={setSelectedProvince}
                setSelectedCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
                // latLngPlusCode={latLngPlusCode}
              />
              {/* {userRole === "Consumer" && (
            <>
              {selectedProvince.length > 0 && !selectedPractitoner && (
                <button
                  type="button"
                  className="text-label-md heading-3 sm:text-[1.2375em] bg-white/0 border-0 outline-none text-white  cursor-pointer w-max"
                  onClick={() => setShowPractitionerListPopup(true)}
                >
                  <Image width="100" height="100" src="/assets/icons/add.png" alt="" />{" "}
                  <span className="ms-2">Select Agent</span>
                </button>
              )}

              {showPractitionerListPopup && (
                <PractitionerListPopup
                  setShowPractitionerListPopup={
                    setShowPractitionerListPopup
                  }
                  setSelectedPractitoner={setSelectedPractitoner}
                  selectedPractitoner={selectedPractitoner}
                  selectedProvince={selectedProvince}
                  selectedCountry={selectedCountry}
                />
              )}

              {selectedPractitoner && (
                <div>
                  <h4 className="text-label-md heading-3 sm:text-[1.2375em] text-white font-normal">
                    Selected Practitioner:
                  </h4>
                  <div className="mt-2 bg-white p-0.5 rounded-[24px]">
                    <p className="w-full flex gap-2 justify-between text-white px-4 bg-dark-blue border-0 rounded-[24px] placeholder:font-medium focus:outline-none text-[13px] py-2.5">
                      <span className=":text-[13px] h-max my-auto">
                        {" "}
                        {selectedPractitoner.firstName +
                          " " +
                          selectedPractitoner.lastName}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          onClick={handleViewPractitionerDetail}
                          className="cursor-pointer material-symbols-outlined "
                        >
                          visibility
                        </span>

                        <span
                          onClick={removePractitioner}
                          className="cursor-pointer material-symbols-outlined text-[red]"
                        >
                          Close
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              )}
            </>
          )} */}
              <InputField
                labelName="Appartment No:"
                inputType="text"
                inputPlaceholder="Enter apartment number"
                inputId="apartmentNo"
                inputName="title"
                inputValue={minPropertyData.title}
                inputOnChangeFunc={handleChange}
              />
              <CustomFileUpload
                labelName="Upload a photo of the house:"
                grayText="Files types supported: JPG/PNG (Max Size: 5MB)"
                imageUrl={houseUrl}
                setImageUrl={setHouseUrl}
                editFilePayload={minPropertyData.image}
                formId={2}
                maxFileSize={5}
              />
              <CompleteFileUpload
                labelName="Upload a copy of the Settlement Statement (Optional)"
                grayText="Files types supported: JPG/PNG/PDF (Max Size: 100 MB)"
                s3Url={settlementStatment}
                setS3Url={setSettlementStatement}
                uploadingToS3={uploadingSettlement}
                setUploadingToS3={setUploadingSettlement}
                editFilePayload={minPropertyData?.document_preview}
                formId={3}
                maxFileSize={100}
                fileType="application/pdf"
                allowPdf={true}
                property={true}
                privateBucket={true}
              />
              <br />
              <CustomButton
                text={"Mint Property NFT"}
                px="sm:px-2.5"
                py="sm:py-3 md:py-3.5"
                fsSm="sm:text-[1rem]"
                fsMd="md:text-[1.25rem]"
                type="submit"
                isLoading={loading ? true : null}
                // handleButtonClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintPropertyNftForm;
