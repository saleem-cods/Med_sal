import { useState, useCallback } from "react";
//icons
import arrowIcon from "../../../../../assets/icons/Wrench.svg";
import Business from "../../../../../assets/icons/business-Dahshboard.svg";
import file from "../../../../../assets/icons/File.svg";
import priceIcon from "../../../../../assets/icons/Price.svg";
import discountIcon from "../../../../../assets/icons/Disc.svg";
import location from "../../../../../assets/icons/Location.svg";
import upload from "../../../../../assets/icons/uplode.svg";
import done from "../../../../../assets/icons/done_uplode.svg";
import product from "../../Products/Table_Product/Products_img/product.svg";
import left from "../Table_Product/Products_img/left.svg";
import right from "../Table_Product/Products_img/right.svg";

import Content from "../../../Dashbord_layout/Content/Content";
import Typography from "../../../../utilities/Typography";
import Dropdown from "../../../../utilities/Dropdown";
import Radio from "../../../../utilities/Radio";
import NoData from "../../../Dashbord_layout/NoData/NoData";
import Table from "../../../Dashbord_layout/TableLayout";
import TabsFillter from "../../../../utilities/TabsFillter";
import View from "../../../Dashbord_layout/Mangment/View";
import Add_product from "../../../Dashbord_layout/Mangment/Add_product";
// 8*************
import Wrench from "../../../../../assets/icons/Wrench.svg";
import Email from "../../../../../assets/icons/Email.svg";
import View_Icon from "../../../../../assets/icons/View.svg";
import { add_product_schema } from "../../../../utilities/Validation";

import { DashInput, InputFile } from "../../../../utilities/Inputs";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import React, { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import * as Yup from "yup";
import Button from "../../../../utilities/Button";
import ClickOutside from "../../../../utilities/Click_Outsite";

export default function Table_Product() {
  const [addProduct_active, set_addProduct_active] = useState(false);
  const AddProductsRef = useRef(null);
  const swiperRef = useRef(null);
  const { t } = useTranslation("global");
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState({});
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [EditDropdown, setEditDropdown] = useState(null);

  // ******************

  const initialValues_Add_Products = {
    Product_Name: "Product Name",
    Product_Type: "Product Type ",
    Description: "Description",
    Location: "Location",
    Price: "Price",

    // Add more initial values for other fields
  };
  const Add_Product_content = {
    title: "Add Product",
    descrption: " You can add your product from here. ",
    inputs: [
      {
        text: "Product Name",
        img: Wrench,
        type: "text",
        name: "Product Name",
      },
      {
        text: "Product Type ",
        img: Email,
        type: "text",
        input_type: "dropdown",
        name: "Product Type",
      },
      {
        text: "Description",
        img: View_Icon,
        type: "text",
        name: "Description",
      },

      {
        text: "Location",
        img: View_Icon,
        type: "text",
        name: "Location",
      },
      {
        text: "Price",
        img: View_Icon,
        type: "password",
        name: "password",
        des: {
          text: "If you would like to add discounts please click  ",
          click_here: " Here",
        },
      },
    ],
    button_content: "Add New Product",
  };
  // **************************8

  const addProductFun = () => {
    set_addProduct_active(!addProduct_active);
  };

  //for table drobdown

  const productSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    price: Yup.string()
      .required("Price is required")
      .test(
        "is-number",
        "Invalid price. Please enter only numbers.",
        (value) => {
          return /^\d+$/.test(value);
        }
      ),
    img: Yup.mixed().test(
      "isImage",
      "Please select a valid image file (JPG, PNG, GIF)",
      function (value) {
        if (!value) {
          return true;
        }

        const supportedFormats = ["image/jpeg", "image/png", "image/gif"];

        if (!supportedFormats.includes(value.type)) {
          throw new Yup.ValidationError("Invalid image", value, "img");
        }
        return true;
      }
    ),
    discountNumber: Yup.string()
      .required("Discount is required")
      .test(
        "is-discount",
        "Invalid discount. Please enter a valid number or percentage.",
        (value) => {
          return /^\d+(\%)?$/.test(value);
        }
      ),
  });

  //for drag and drob img

  const radioItems = [
    { value: "All Product", label: "All Product" },
    { value: "Last Product", label: "Last Product" },
  ];

  const columns = [
    "ID",
    "Name",
    "Description",
    "Location",
    "price",
    "Clinic Name",
    "Status",
    "Discount",
    " ",
  ];
  const rows = [
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Not Active",
      Create_Request: "Now",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Not Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Disabled",
      Create_Request: "Mazh",
    },
  ];

  const points = [
    { name: "Edit Product", type: "edit" },
    { name: "View Product", type: "view" },
    { name: "Delete Product", type: "delete" },
  ];
  const sortlist = [
    { name: "Sort by name", type: "view" },
    { name: "Sort by active", type: "view" },
    { name: "Sort by non active", type: "view" },
  ];
  const optionsDropdown = [
    { name: "active", type: "" },
    { name: "Non Active", type: "" },
    { name: "Disable", type: "view" },
  ];

  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };
  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };
  const handleChangeDropdown = (selected) => {
    setEditDropdown(selected);
  };

  //open edit section
  const handleOpenEdit = () => {
    setEdit(true);
  };

  //open view section
  const handleOpenView = () => {
    setView(true);
  };
  // close edit section
  const handleClose = () => {
    setEdit(false);
  };
  const handleDiscount = () => {
    setDiscount(true);
    setEdit(false);
  };
  //close discount section when clic outside
  const handleEditDiscount = () => {
    setDiscount(false);
  };
  //close discount section when clic outside
  const handleCloseView = () => {
    setView(false);
  };
  //if my clic is oo edit section
  useEffect(() => {
    if (point.type === "edit") {
      handleOpenEdit();
    } else if (point.type === "view") {
      handleOpenView();
    }
  }, [point]);

  const formik = useFormik({
    initialValues: {
      name: "Artificial foot",
      description: "Artificial foot for people with special needs",
      location: "Maza",
      price: "2000",
      discount: "1800",
      img: "",
      discountNumber: "%",
    },
    validationSchema: productSchema, // Use the productSchema for general details
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const onDrop = useCallback((acceptedFiles) => {
    formik.setFieldValue("img", acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const price = formik.values.price;
  const discountPercentage = formik.values.discountNumber;
  // تحويل النسبة المئوية إلى قيمة عددية
  const numericDiscount = parseFloat(discountPercentage);
  // تحقق من عدم تجاوز القيمة 100
  const validDiscount = numericDiscount <= 100 ? numericDiscount : 100;
  // حساب القيمة بعد الخصم
  const priceAfterDiscount = price - (validDiscount / 100) * price;

  return (
    <>
      <>
        <ClickOutside onClick={handleClose}>
          <form onSubmit={formik.handleSubmit}>
            {edit ? (
              <div className="w-[17rem] sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
                <div className="py-5 md:py-10 flex flex-col gap-3">
                  <Typography component={"h3"}>
                    {" "}
                    {t("editProduct.0")}
                  </Typography>
                  <Typography component={"h5"}>
                    {t("editProduct.1")}: 10/27/2023 11:34, {t("editProduct.2")}
                  </Typography>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="w-full flex items-center justify-between ease-in-out border-[1px] rounded-md text-mySlate border-myGray-400">
                    <Dropdown
                      options={optionsDropdown}
                      value={EditDropdown}
                      onChange={handleChangeDropdown}
                      className="active:border-primary focus-within:border-primary duration-150 w-full"
                      icon={arrowIcon}
                      showSlected={true}
                      ulClassname={"w-full "}
                    />
                  </div>
                  <DashInput
                    name={"name"}
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    icon={Business}
                    errorMsg={
                      formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : ""
                    }
                  />
                  <DashInput
                    name={"description"}
                    type="text"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    icon={file}
                    errorMsg={
                      formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : ""
                    }
                  />
                  <DashInput
                    name={"location"}
                    type="text"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    icon={location}
                    errorMsg={
                      formik.touched.location && formik.errors.location
                        ? formik.errors.location
                        : ""
                    }
                  />
                  <DashInput
                    name={"price"}
                    type="text"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    icon={priceIcon}
                    errorMsg={
                      formik.touched.price && formik.errors.price
                        ? formik.errors.price
                        : ""
                    }
                  />
                  <div className="flex flex-col gap-1">
                    <DashInput
                      name={"discount"}
                      type="text"
                      value={formik.values.discount}
                      icon={discountIcon}
                      isDisabled={true}
                      errorMsg={
                        formik.touched.discount && formik.errors.discount
                          ? formik.errors.discount
                          : ""
                      }
                    />

                    <Typography className={"flex gap-1"} component={"h5"}>
                      {t("editProduct.3")}
                      <p
                        onClick={handleDiscount}
                        className="text-secondary hover:text-success cursor-pointer"
                      >
                        {t("editProduct.4")}
                      </p>
                    </Typography>
                  </div>
                  <InputFile
                    name={"img"}
                    type={"file"}
                    value={formik.values.img}
                    onChange={(e) =>
                      formik.setFieldValue("img", e.target.files[0])
                    }
                    label={
                      formik.values.img && !formik.errors.img ? (
                        t("sitting.6")
                      ) : (
                        <Typography component={"h5"}>
                          {t("sitting.4")}
                        </Typography>
                      )
                    }
                    className={
                      "h-28  flex flex-col-reverse items-center justify-center gap-4 "
                    }
                    icon={
                      formik.values.img && !formik.errors.img ? done : upload
                    }
                    classNameIcon={"w-[3rem] "}
                    id={"img"}
                    errorMsg={formik.errors.img ? formik.errors.img : ""}
                    hasValueTrue={formik.values.img && !formik.errors.img}
                    isInvalidType={formik.errors.img ? formik.errors.img : ""}
                    getRootProps={{ ...getRootProps() }}
                    getInputProps={{ ...getInputProps() }}
                    isDragActive={isDragActive}
                  />
                  <Button fullWidth={true} type="submit">
                    {t("editProduct.5")}
                  </Button>
                </div>
              </div>
            ) : (
              ""
            )}
            <ClickOutside onClick={handleCloseView}>
              {view ? (
                <div className="w-[17rem] sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
                  <div className="py-5 md:py-10 flex flex-col gap-3">
                    <Typography component={"h3"}>
                      {t("viewProduct.0")}
                    </Typography>
                    <Typography component={"h5"}>
                      {t("viewProduct.1")} 10/27/2023 11:34
                      {t("viewProduct.2")}
                    </Typography>
                  </div>
                  <>
                    <Swiper
                      navigation={{
                        nextEl: ".custom-next-button",
                        prevEl: ".custom-prev-button",
                      }}
                      modules={[Navigation]}
                      className="py-5"
                      ref={swiperRef}
                    >
                      <SwiperSlide className="flex items-center justify-center ">
                        <img src={product} alt="img" />
                      </SwiperSlide>
                      <SwiperSlide className="flex items-center justify-center">
                        <img src={product} alt="img" />
                      </SwiperSlide>

                      <div className="custom-next-button custom-next-button-right absolute start-20 z-50 top-[50%] -translate-y-[50%] ">
                        <img
                          className="w-10 h-10 cursor-pointer rtl:rotate-180"
                          src={left}
                          alt=""
                        />
                      </div>
                      <div className="custom-prev-button custom-next-button-left absolute end-20 z-50 top-[50%] -translate-y-[50%]">
                        <img
                          className="w-10 h-10 cursor-pointer rtl:rotate-180"
                          src={right}
                          alt=""
                        />
                      </div>
                    </Swiper>
                  </>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <DashInput
                      name={"status"}
                      type={"text"}
                      value={"active"}
                      icon={Business}
                      isDisabled={true}
                    />

                    <DashInput
                      name={"name"}
                      type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      icon={Business}
                      isDisabled={true}
                    />
                    <DashInput
                      name={"description"}
                      type="text"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      icon={file}
                      isDisabled={true}
                    />
                    <DashInput
                      name={"location"}
                      type="text"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      icon={location}
                      isDisabled={true}
                    />
                    <DashInput
                      name={"price"}
                      type="text"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      icon={priceIcon}
                      isDisabled={true}
                    />
                    <DashInput
                      name={"discount"}
                      type="text"
                      value={formik.values.discount}
                      icon={discountIcon}
                      isDisabled={true}
                    />
                    <Button
                      fullWidth={true}
                      onClick={handleCloseView}
                      type="submit"
                    >
                      {t("viewProduct.3")}
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </ClickOutside>
            <ClickOutside onClick={handleEditDiscount}>
              {discount ? (
                <div className="w-[17rem] min-h-full sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
                  <div className="py-5 md:py-10 flex flex-col gap-3">
                    <Typography component={"h3"}>{t("discount.0")}</Typography>
                    <Typography component={"h5"}>{t("discount.1")}</Typography>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4">
                    <DashInput
                      name={"discountNumber"}
                      type="text"
                      value={formik.values.discountNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      icon={priceIcon}
                      errorMsg={
                        formik.touched.discountNumber &&
                        formik.errors.discountNumber
                          ? formik.errors.discountNumber
                          : ""
                      }
                    />
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="text-primary text-xs">
                          {t("discount.2")}
                        </p>
                        <p className="text-myGray-600 text-xs">
                          {formik.values.price}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-primary text-xs">
                          {t("discount.3")}
                        </p>
                        <p className="text-myGray-600 text-xs">
                          {priceAfterDiscount}
                        </p>
                      </div>
                    </div>
                    <Button fullWidth={true} type="submit">
                      {t("discount.4")}
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </ClickOutside>
          </form>
        </ClickOutside>
      </>

      <Content
        path={" Products /Table Product"}
        hasRefrech={true}
        hasAddProducts={true}
        classNameChildern="bg-white  h-screen"
        set_addProduct_active={set_addProduct_active}
        addProduct_active={addProduct_active}
        addProductFun={addProductFun}
      >
        <div className="relative">
          {addProduct_active ? (
            <Add_product
              discount={discount}
              setDiscount={setDiscount}
              ref={AddProductsRef}
              Add_Product_content={Add_Product_content}
              initialValues={initialValues_Add_Products}
              validation_schema={add_product_schema}
              addProduct_active={addProduct_active}
              set_addProduct_active={set_addProduct_active}
            />
          ) : (
            ""
          )}
          {/* {discount ? (
                <div className="w-[17rem] min-h-full sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
                  <div className="py-5 md:py-10 flex flex-col gap-3">
                    <Typography component={"h3"}>View Product</Typography>
                    <Typography component={"h5"}>
                      Register Date in: 10/27/2023 11:34, for this product
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-5">
                    <DashInput
                      name={"discountNumber"}
                      type="text"
                      value={formik.values.discountNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      icon={priceIcon}
                      errorMsg={
                        formik.touched.discountNumber &&
                        formik.errors.discountNumber
                          ? formik.errors.discountNumber
                          : ""
                      }
                    />
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="text-primary text-xs">
                          Price before discounter:{" "}
                        </p>
                        <p className="text-myGray-600 text-xs">
                          {formik.values.price}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-primary text-xs">
                          Price after discounter:{" "}
                        </p>
                        <p className="text-myGray-600 text-xs">
                          {priceAfterDiscount}
                        </p>
                      </div>
                    </div>
                    <Button fullWidth={true} type="submit">
                      Edit Discount
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )} */}

          <TabsFillter>
            <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {rows.length} record
            </span>

            <Radio
              name="Services"
              items={radioItems}
              value={valueRadio}
              onChange={setValueRadio}
            />
          </TabsFillter>
          {rows.length >= 1 ? (
            <Table
              className={"min-h-screen"}
              columns={columns}
              rows={rows}
              points={points}
              point={point}
              handlepoint={handlepoint}
            />
          ) : (
            <NoData></NoData>
          )}
        </div>
      </Content>
    </>
  );
}