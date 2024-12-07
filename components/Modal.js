import React, { useEffect, useState } from "react";
import style from "./Modal.module.css";

const Modal = ({ show, suites, closeModal }) => {
  const [selectedFlow, setSelectedFlow] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    if (suites && suites.tests) {
      // Select the first flow and its first test on load
      const firstFlow = Object.keys(suites.tests)[0];
      if (firstFlow) {
        setSelectedFlow(firstFlow);
        setSelectedTest(suites.tests[firstFlow][0]);
      }
    }
  }, [suites]);

  if (!show || !suites || !suites.tests) return null;

  const paymentMode = suites.paymentMode;
  const flows = Object.keys(suites.tests);

  // Get overall status for each flow (with icons)
  const getFlowStatus = (flow) => {
    const tests = suites.tests[flow];
    if (!tests) return "unknown"; // In case there are no tests
    const hasFailure = tests.some((test) =>
      test.steps?.some((step) => !step.status)
    );
    const hasPartial = tests.some(
      (test) =>
        test.steps?.some((step) => !step.status) &&
        test.steps?.some((step) => step.status)
    );
    if (hasPartial) return "partial";
    if (hasFailure) return "failed";
    return "passed";
  };

  // Get status for each test based on the steps (with icons)
  const getTestStatus = (test) => {
    return test.status ? "passed" : "failed";
  };

  // Get overall suite status
  const getSuiteStatus = () => {
    const allTests = flows.flatMap((flow) => suites.tests[flow]);
    const hasFailure = allTests.some((test) =>
      test.steps.some((step) => !step.status)
    );
    const hasPartial = allTests.some(
      (test) =>
        test.steps.some((step) => !step.status) &&
        test.steps.some((step) => step.status)
    );
    if (hasPartial) return "partial";
    if (hasFailure) return "failed";
    return "passed";
  };

  return (
    <div className={`${style.modal} ${style.fadeIn}`} onClick={closeModal}>
      <div
        className={style.modal_content}
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
      >
        <div className={style.modal_header}>
          <h2 className={style.modal_header_title}>
            <span className={style.testx}>{paymentMode}{" "}</span>
            <span
              className={`${style.test_status} ${style[getSuiteStatus()]}`}
            >
              {getSuiteStatus().toUpperCase()}
            </span>
          </h2>
          <span className={style.modal_close} onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className={style.modal_body}>
          <div className={style.modal_sidebar}>
            {flows.map((flow) => (
              <div key={flow} className={style.modal_sidebar_item}>
                <h4
                  className={`${selectedFlow === flow ? style.selectedFlow : style.card} `}
                  onClick={() => {
                    setSelectedFlow(flow);
                    setSelectedTest(suites.tests[flow][0]);
                  }}
                >
                  {/* {getFlowStatus(flow) === "passed" ? "✅" : "❌"} */}
                  <span>{flow.toUpperCase() }</span>
                  <span className={`${style[getFlowStatus(flow)]} ${style.test_status}`}>{getFlowStatus(flow).toUpperCase()}</span>
                </h4>
                {selectedFlow === flow && (
                  <ul>
                    {suites.tests[flow].map((test) => (
                      <li
                        key={test.testName}
                        className={`${selectedTest === test ? style.selectedTest : style.card}`}
                        onClick={() => setSelectedTest(test)}
                      >
                        {/* {test.status ? "✅" : "❌"} */}
                        {test.testName}
                        <span className={`${style[getTestStatus(test)]} ${style.test_status}`}>{getTestStatus(test).toUpperCase()}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className={style.modal_main}>
            {selectedTest ? (
              <TestDetails flow={selectedFlow} test={selectedTest} />
            ) : (
              <p>Select a test to view details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestDetails = ({ flow, test }) => (
  <div>
    <h3 className={style.testName}>
      <span>{test.testName} </span>
      <span className={style.time}>{test.timeTaken} ms</span>
    </h3>
    <ul>
      {test.steps.map((step, index) => (
        <li key={index} className={style.step}>
          <span className={style.status_icon}>
            {step.status ? "✅" : "❌"}
          </span>
          <span>{step.step}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Modal;
