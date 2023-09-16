import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/Modal.store";
import PropTypes from "prop-types";

const ModalCreateSub = ({ subTasks, setSubTasks }) => {
  const dispatch = useDispatch();

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate = year + "-" + month + "-" + day;
  const maxDate = year + 1 + "-" + month + "-" + day;

  const [date, setDate] = useState(todayDate);

  const isDateValid = useRef(false);

  useEffect(() => {
    localStorage.setItem("sub", JSON.stringify(subTasks));
  }, [subTasks]);

  const [todo, setTodo] = useState("");

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      isDateValid.current = date.trim().length > 0;

      setSubTasks([
        ...subTasks,
        {
          id: subTasks.length + 1,

          date: date,
          title: todo.trim(),
          sub: "sub",
        },
      ]);
    }

    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between py-3 bg-[#F6F6F6] px-3 border-slate-200 rounded-t">
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  Add Sub Todo
                </h5>

                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => dispatch(modalActions.closeModalCreateSub())}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative px-6 py-1 flex-auto">
                <label>Todo</label>
                <input
                  type="tex"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={todo}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative px-6 py-1 flex-auto">
                <label>Date Time</label>
                <input
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={date}
                  required
                  onChange={({ target }) => setDate(target.value)}
                  min={todayDate}
                  max={maxDate}
                />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => dispatch(modalActions.closeModalCreateSub())}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
ModalCreateSub.propTypes = {
  subTasks: PropTypes.array.isRequired, // You can specify the prop type and if it's required
  setSubTasks: PropTypes.array.isRequired,
};

export default ModalCreateSub;
