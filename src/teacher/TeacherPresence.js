import { mdiAlphaABox, mdiAlphaB, mdiCheckBold, mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Cookie from "../util/Cookie";
// import { useGetTeacherClassDetailQuery } from "./TeacherAPI";

export default function TeacherPresence() {
  // const data = [
  //   { name: "Ridhwan Rasyid Siddiq", icon: mdiAlphaABox },

  // ];

  // const { isLoading, data, isSuccess, isError, error } =
  //   useGetTeacherClassDetailQuery({
  //     token: Cookie.getItem("token"),
  //     idClass: 2,
  //   });
  // console.log(data);
  return <></>;
}

// <Layout role="TEACHER">
//   <div className="mx-auto mb-[60px] min-h-[90vh] max-w-[444px] border pb-20 shadow-lg">
//     <div className="-m-5 mb-5 h-[55px] max-w-[120%] bg-[#990303] p-5">
//       <Link to="/teacher/">
//         <Icon path={mdiChevronLeft} size="1.9em" color="white" />
//       </Link>
//     </div>

//     <div className="px-5">
//       <h1 className="text-3xl font-semibold">Matematika </h1>
//       <div className="mt-4 mb-1 flex w-full justify-between rounded-lg bg-gradient-to-r from-red-700 to-[#f48282] px-5 py-2 font-semibold text-white shadow-lg">
//         <h1>XI RPL 4</h1>
//         <p>08:00 - 10:00</p>
//       </div>

//       <div className="shadow-xl">
//         {data.map((student, idx) => (
//           <div
//             key={idx}
//             className="flex w-full items-center justify-between border-t border-gray-100 py-4 pl-6 pr-3 text-gray-600 transition duration-150 hover:bg-gray-100 "
//           >
//             <span>{idx + 1}</span>
//             <p>{student.name}</p>
//             &nbsp;
//             <p className={`text-xs text-gray-500`}>24-06-2022</p>
//             <Icon
//               size="19px"
//               className={`mx-1  ${
//                 student.icon === mdiAlphaABox
//                   ? "rounded-full text-red-600"
//                   : "text-green-600"
//               }`}
//               path={student.icon}
//             />
//           </div>
//         ))}
//       </div>

//       {/* END */}
//     </div>
//   </div>
// </Layout>
