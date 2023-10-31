import React, { useState } from 'react';
import Logo from "../../../utilities/Logo";
import vector from "./SideBar_Dashbord_images/Vector.svg"
import person from "./SideBar_Dashbord_images/Person.svg"
import Arrow_Dropdown from "./SideBar_Dashbord_images/Arrow Dropdown.svg"
import Services from "./SideBar_Dashbord_images/Services.svg"
import person_pluse from "./SideBar_Dashbord_images/Person Plus.svg"
import Graph from "./SideBar_Dashbord_images/Graph.svg"
import Notification from "./SideBar_Dashbord_images/Notification.svg"
import setting from "./SideBar_Dashbord_images/Setting.svg"
import logout from './SideBar_Dashbord_images/Logout.svg'





const Menus = [
  {
    main_title:'About users',
  Data:[
      {
             title: 'All Users'
          , 
          src: 'Chart_fill'
          , 
          icon :person,
           subMenus: [
            {
              title: 'Service Providers',
              src: '/all_users/Service_Providers',
        
              cName: 'sub-nav',
             },
            {
               title: 'Patient Users ',
               src: '/all_users/Patient_Users ',
        
               cName: 'sub-nav',
            },
           {
               title: 'Admin Users  ',
               src: '/all_users/Admin_Users ',
        
              cName: 'sub-nav',
             },
           ]
        
         },
         
  {
    title: 'Services',
    src: 'Services',
    icon: Services,
    // subMenus: [
    //   {
    //     title: 'Service 1',
    //     src: '/services/services1',

    //     cName: 'sub-nav',
    //   },
    //   {
    //     title: 'Service 2',
    //     src: '/services/services2',

    //     cName: 'sub-nav',
    //   },
    //   {
    //     title: 'Service 3',
    //     src: '/services/services3',
    //   },
    // ],
  },
  { title: 'Requests ', src: 'Chart', icon: person_pluse },
  { title: 'Report  ', src: 'Folder', gap: true, icon: Graph },
  { title: 'Notifications', src: 'Setting', icon: Notification },
 
         

    ]


  },
  {
    main_title:'About Dashboard',
    Data:[
      {
             title: 'Settings'
          , 
          src: 'Chart_fill'
          , 
          icon :setting,
          
        
         },
         
  {
    title: 'Sign Out',
    src: 'Services',
    icon: logout,

  },

 
         

    ]


  }
  
]




const SideBardashbord = () => {

  
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
    
   
  }

  return (

    <div className=" h-screen  flex justify-center flex-wrap  py-5 px-10 w-[20%] ">
      {/* for md and sm screen */}
    {/* <button
      className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
      onClick={toggleSidebar}
    >
      <span className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 m-auto"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
          />
        </svg>
      </span>
    </button> */}

    <div
      className={` ${
        open ? 'w-48 px-2 ' : 'w-0 '
      } lg:w-72  h-screen   relative duration-500 flex flex-col gap-8  items-start  `}
    >
      {/* logo */}
      <div className=" justify-center flex ">

       <Logo/>
      </div>
      {/* Dashbord  */}
     <div className='flex px-5 py-2 items-center gap-5 grident rounded-[8px] w-full '> 
        <img src={vector} alt="" />
       <p className='text-white'>Dashboard</p>
    </div>

    
    {Menus.map((Menu,index)=>{
      return(
      <div className=' w-full ' key={index}>
        <p className='text-[16px] font-normal text-myGray-500 mb-4'>{Menu.main_title}</p>
        <ul className="   w-full">
      

      {Menu.Data.map((data, index) => (
        <>
          <li
            key={index}
            className={`flex  rounded-md  cursor-pointer mb-5  p-2 text-sm items-center gap-x-5 ${subMenuOpen ? "grident text-white" :"" } 
          ${data.gap ? 'mt-9' : 'mt-2'}  `}
          >
         
            <img src={data.icon} alt="" />
            <span className="flex-1">{data.title}</span>
            {data.subMenus && (
              <img
              src={Arrow_Dropdown}
                onClick={(e) => {setSubMenuOpen(!subMenuOpen)  }}
                className={`${subMenuOpen && 'rotate-180  '} `}
              />
            )}
          </li>
          {data.subMenus && subMenuOpen && open && (
            <ul>
              {data.subMenus.map((subMenuItem, idx) => (
                <li
                  key={idx}
                  className="  flex px-5 cursor-pointer  text-center text-[15px] text-myGray-600 py-5 hover:text-primary duration-75"
                >
                  {subMenuItem.title}
                </li>
              ))}
            </ul>
          )}
        </>
      ))}
    </ul>
    
        
      </div>
      )

    })}


    
  


    </div>

    <p className='text-myGray-500 text-[12px]'>We hope that our website will be useful to you and we are happy for you to <span text-success>contact us</span>.</p>


  </div>
);
                }
            
export default SideBardashbord





