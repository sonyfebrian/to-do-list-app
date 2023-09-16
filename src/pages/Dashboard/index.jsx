import { useEffect, useState, useRef } from "react";
import {
  Sidebar,
  NavbarTop,
  Modal,
  ModalConfirm,
  ModalCreateSub,
} from "../../components";
import { Container, Row, Col } from "reactstrap";
import { logoText, dokumen } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/Modal.store";
import { FiTrash } from "react-icons/fi";

import { BsThreeDotsVertical } from "react-icons/bs";

const Dashboard = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const modalCreateTaskOpen = useSelector(
    (state) => state.modal.modalCreateTaskOpen
  );
  const modalComfirmOpen = useSelector((state) => state.modal.modalConfirmOpen);
  const modalCreateSubOpen = useSelector(
    (state) => state.modal.modalCreateSubOpen
  );

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [subTasks, setSubTasks] = useState(() => {
    const savedSubs = localStorage.getItem("sub");

    if (savedSubs) {
      return JSON.parse(savedSubs);
    } else {
      return [];
    }
  });

  const [selectedTask, setSelectedTask] = useState(false);

  const handleClick = (param) => {
    console.log(param, "param");
    setSelectedTask(param);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedTask(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleDeleteClick(id) {
    const removeItem = subTasks.filter((todo) => {
      return todo.id !== id;
    });
    setSubTasks(removeItem);
  }

  return (
    <>
      <Container fluid>
        <Row className="flex-nowrap">
          <Col xs="auto" md="3" xl="2" className="p-0">
            {" "}
            <Sidebar />
          </Col>
          <Col md="9" xl="10" className="p-0">
            {" "}
            <NavbarTop />
            <section className="text-gray-600 body-font">
              <div className="inline-flex items-center ml-20">
                <img
                  className="w-5 h-5 object-cover object-center rounded mr-2"
                  alt="hero"
                  src={logoText}
                />
                <p className="leading-relaxed mt-3">Todo</p>
                <button
                  onClick={() => dispatch(modalActions.openModalCreateTask())}
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm"
                >
                  Create Todo +
                </button>
              </div>

              {todos ? (
                <>
                  <section className="text-gray-600 body-font overflow-hidden ">
                    <div className="container px-5 py-1 mx-auto ">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                          <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8  flex-col">
                            {todos.map((task) => {
                              // console.log(task.task.id);
                              return (
                                <>
                                  <div className="bg-gray-100 rounded flex p-4 h-full w-full mt-1 items-center justify-between">
                                    <div className="flex items-center">
                                      <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                      />
                                      <span className="font-normal ml-4 text-gray-700">
                                        {task.title}
                                      </span>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="font-normal text-gray-700">
                                        {task.date}
                                      </span>{" "}
                                      <button
                                        onClick={() => handleClick(task.id)}
                                        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700"
                                      >
                                        <BsThreeDotsVertical className="w-4 sm:w-5 h-4 sm:h-5 " />{" "}
                                      </button>
                                      {selectedTask === task.id && (
                                        <div
                                          ref={modalRef}
                                          className="absolute w-40 mt-32  px-3 py-2 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent"
                                        >
                                          <p className="m-0 cursor-pointer">
                                            Edit
                                          </p>
                                          <p
                                            className="m-0 cursor-pointer"
                                            onClick={() =>
                                              dispatch(
                                                modalActions.openModalConfirm()
                                              )
                                            }
                                          >
                                            Delete
                                          </p>
                                          <p
                                            className="m-0 text-sm cursor-pointer"
                                            onClick={() =>
                                              dispatch(
                                                modalActions.openModalCreateSub()
                                              )
                                            }
                                          >
                                            Create Sub To-do
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {subTasks
                                    ? subTasks.map((task, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className="bg-gray-100 ml-6 rounded flex p-4 h-full w-full mt-1 items-center justify-between"
                                          >
                                            <div className="flex items-center">
                                              <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                              />
                                              <span className="font-normal ml-4 text-gray-700">
                                                {task.title}
                                              </span>
                                            </div>
                                            <div className="flex items-center">
                                              <button
                                                onClick={() =>
                                                  handleDeleteClick(task.id)
                                                }
                                                className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700"
                                              >
                                                <FiTrash className="w-4 sm:w-5 h-4 sm:h-5 " />{" "}
                                              </button>
                                            </div>
                                            {modalComfirmOpen ? (
                                              <ModalConfirm
                                                task={task.id}
                                                todos={todos}
                                                setTodos={setTodos}
                                              />
                                            ) : null}
                                          </div>
                                        );
                                      })
                                    : ""}

                                  {modalComfirmOpen ? (
                                    <ModalConfirm
                                      task={task.id}
                                      todos={todos}
                                      setTodos={setTodos}
                                    />
                                  ) : null}
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <div className="container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
                    <img
                      className="lg:w-2/6 md:w-3/6 w-5/6  object-cover object-center rounded"
                      alt="hero"
                      src={dokumen}
                    />
                    <p className="leading-relaxed">You Dont Have a Todo yet</p>
                  </div>
                </>
              )}
            </section>
          </Col>
        </Row>
        {modalCreateTaskOpen ? (
          <Modal todos={todos} setTodos={setTodos} />
        ) : null}
        {modalCreateSubOpen ? (
          <ModalCreateSub subTasks={subTasks} setSubTasks={setSubTasks} />
        ) : null}
      </Container>
    </>
  );
};

export default Dashboard;
