//Login Module Components
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import ForgetPassword from "./views/ForgetPassword/ForgetPassword";

//Dashboard Module Components
import Dashboard from './views/Dashboard';
import CustomerList from './views/Customers/CustomersList';
import EmployeesList from './views/Employees/EmployeesList';
import OrdersList from './views/Orders/OrdersList';
import sericeOut from './views/Services/service-out';
import Promotions from './views/Promotions/promotions';
import ManagePages from './views/Pages/ManagePages';
import Cities from './views/Cities/Cities';
import Admin from './views/Admin/Admin';
import Cars from './views/Cars/Cars';

//Profile Module Components
import Profile from './views/Profile/Profile';
import ViewProfile from './views/Profile/ViewProfile';
import ChangePassword from './views/Profile/ChangePassword';

//Page related routes
import questionList from './views/Pages/Questions/questionList';
import TermsOfUse from './views/Pages/TermsofUse/TermsofUse';
import PrivacyPolicy from "./views/Pages/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "./views/Pages/CancellationPolicy/CancellationPolicy";
import AboutUs from "./views/Pages/AboutUs/AboutUs";

//Login routes
var loginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/forgotpassword",
    name: 'Forget Password',
    icon: "ni ni-circle-08 text-pink",
    component: ForgetPassword,
    layout: "/auth"
  }
];

// Pages routes
var pageRoutes = [
  {
    path: "/questions",
    name: "Frequently Asked Questions",
    id: "questionList",
    icon: "fa fa-arrow-circle-right text-info",
    component: questionList,
    layout: "/page"
  },
  {
    path: "/terms",
    name: "Terms of Use and Membership Agreement",
    id: "termsOfUse",
    icon: "fa fa-arrow-circle-right text-info",
    component: TermsOfUse,
    layout: "/page"
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy and KVKK Agreement",
    id: "privacyPolicy",
    icon: "fa fa-arrow-circle-right text-info",
    component: PrivacyPolicy,
    layout: "/page"
  },
  {
    path: "/cancellation-policy",
    name: "Cancellation Policy",
    id: "cancellationPolicy",
    icon: "fa fa-arrow-circle-right text-info",
    component: CancellationPolicy,
    layout: "/page"
  },
  {
    path: "/about-us",
    name: "About Us",
    id: "aboutUs",
    icon: "fa fa-arrow-circle-right text-info",
    component: AboutUs,
    layout: "/page"
  },
]


//Dashboard routes
var dashboardRoutes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Dashboard,
  //   layout: "/dashboard"
  // },
  {
    path: "/admin",
    name: "Admin",
    icon: "ni ni-single-02",
    component: Admin,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/customer-list",
    name: "Customers",
    icon: "ni ni-single-02",
    component: CustomerList,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/cars",
    name: "Cars",
    icon: "fa fa-car",
    component: Cars,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/cities",
    name: "Cities",
    icon: "fa fa-map-marker",
    component: Cities,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/employees-list",
    name: "Employees",
    icon: "fa fa-users",
    component: EmployeesList,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/orders-list",
    name: "Orders",
    icon: "ni ni-cart",
    component: OrdersList,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/service-out",
    name: "Out of Service",
    icon: "ni ni-settings",
    component: sericeOut,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/promotions",
    name: "Promotions / Announcement",
    icon: "fa fa-newspaper",
    component: Promotions,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/profile",
    name: "Profile",
    id: "Profile",
    icon: "ni ni-single-02 text-info",
    component: Profile,
    layout: "/dashboard",
    child:null
  },
  {
    path: "/page",
    name: "Pages",
    id: "ManagePages",
    icon: "fa fa-newspaper",
    component: ManagePages,
    layout: "/dashboard",
    child:pageRoutes
  },
]

//Profile routes
var profileRoutes = [
  {
    path: "/user-profile",
    name: "My Profile",
    icon: "ni ni-single-02",
    component: ViewProfile,
    layout: "/profile"
  },
  {
    path: "/change-password",
    name: "Change Password",
    icon: "ni ni-support-16",
    component: ChangePassword,
    layout: "/profile"
  },
]

export {loginRoutes, dashboardRoutes, profileRoutes, pageRoutes};
