import { modalActions } from "../../store/Modal.store";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ModalConfirm = ({ task, todos, setTodos }) => {
  const dispatch = useDispatch();

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between py-3 bg-[#F6F6F6] px-3 border-slate-200 rounded-t">
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Confirm Delete
              </h5>

              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => dispatch(modalActions.closeModalConfirm())}
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
            <h5 className="text-xl  py-1 px-3 mr-20 font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Are you Sure to Delete ?
            </h5>
            {/*footer*/}
            <div className="flex items-center justify-end p-6  gap-2 rounded-b">
              <button
                className="text-white bg-[#154886] font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() => handleDeleteClick(task)}
              >
                Confirm
              </button>

              <button
                className="bg-[#E3E8EF] text-gray-600 active:bg-emerald-600 font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() => dispatch(modalActions.closeModalConfirm())}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
ModalConfirm.propTypes = {
  task: PropTypes.number.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.array.isRequired,
};
export default ModalConfirm;
