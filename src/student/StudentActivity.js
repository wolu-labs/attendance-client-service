import { mdiAlphaACircle, mdiCheckBold, mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";
import Cookie from "../util/Cookie";
import { useGetStudentActivityQuery } from "./StudentAPI";

export default function StudentActivity() {
  const { data, isSuccess, isLoading, error, isError } =
    useGetStudentActivityQuery({
      token: Cookie.getItem("token").split("."),
    });

  const navigate = useNavigate();

  if (isError && error.status === 401) {
    Cookie.deleteItem("token");
    navigate("/auth/login");
    return;
  }

  return (
    <Layout title="Activity" role="STUDENT">
      <div
        className={`mx-auto mb-[60px] max-w-[444px] border px-5 py-3 pb-20 shadow-lg ${
          isLoading && "h-screen"
        }`}
      >
        <div className="-m-5 h-[50px] max-w-[150%] bg-[#6A64F1] pt-3 pl-3">
          <Link to="/student/">
            <Icon path={mdiChevronLeft} size="1.9em" color="white" />
          </Link>
        </div>

        <div className="mt-10">
          {isLoading && (
            <>
              <div className="mb-2 mt-5 w-full rounded-lg bg-gradient-to-r from-blue-700 to-[#63c2f0] px-5 py-2 font-semibold text-white shadow-lg">
                &nbsp;
              </div>
              <div className="rounded-lg py-5 px-5 shadow-lg">
                <div className="mb-3 w-[80%]">
                  <Skeleton />
                </div>
                <div className="mb-3 w-[50%]">
                  <Skeleton />
                </div>
                <div className="mb-3 w-[65%]">
                  <Skeleton />
                </div>
              </div>
            </>
          )}

          {(() => {
            if (isSuccess) {
              let temp = [];
              let i = 0;
              for (const obj in data) {
                i++;
                temp.push(
                  <Fragment key={i.toString()}>
                    <div className="mb-2 mt-5 w-full rounded-lg bg-gradient-to-r from-blue-700 to-[#63c2f0] px-5 py-2 font-semibold text-white shadow-lg">
                      {obj}
                    </div>
                    <div className="rounded-lg pb-4 shadow-lg">
                      {data[obj].map((presence, idx) => (
                        <div
                          className=" flex w-full items-center border-t border-gray-100 py-2  pl-6 text-gray-600 transition duration-150 hover:bg-gray-100"
                          key={idx.toString()}
                        >
                          <div className="flex gap-1">
                            {presence.status === "HADIR" ? (
                              <Icon
                                size="19px"
                                className={`mx-1 text-green-600`}
                                path={mdiCheckBold}
                              />
                            ) : presence.status === "ALPHA" ? (
                              <Icon
                                size="19px"
                                className={`mx-1 text-red-600`}
                                path={mdiAlphaACircle}
                              />
                            ) : (
                              ""
                            )}
                            <h4 className="text-gray-700">{presence.name}</h4>{" "}
                            <p className="text-sm text-gray-500">
                              {presence.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fragment>
                );
              }
              return temp;
            }
          })()}
        </div>
      </div>
    </Layout>
  );
}

//

/* <div className="mb-4 mt-5 w-full rounded-lg bg-gradient-to-r from-blue-700 to-[#63c2f0] px-5 py-2 font-semibold text-white shadow-lg">
            Mei 2022
          </div>
          <div className="px-5">
            <div className="flex gap-1">
              <Icon
                path={mdiCheckBold}
                size="24px"
                className="text-green-700"
              />
              <h4 className="text-gray-700">Pendidikan Kewarganegaraan</h4>{" "}
              <p className="text-sm text-gray-500">20-06-2022</p>
            </div>
          </div> */