import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import moment from "moment";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const closeModal = (e) => {
    console.log(e.target, e.currentTarget);
    if (e.target !== e.currentTarget) return;
    setShowModal(false);
  };

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(async () => {
    let res = await fetch("https://sims.0xcti.tech/api/v1/status");
    res = await res.json();
    setTime(res.timeStamp);
    setData(res.data);
    console.log(data);
  }, []);

  const renderTest = (specs) => {
    console.log(specs);
    return (
      <div className={styles.test}>
        <p>{specs.testName}</p>
        <div>
          {specs.status ? (
            <AiFillCheckCircle color="green" size="1.2em" />
          ) : (
            <AiFillCloseCircle color="red" size="1.2em" />
          )}
        </div>
      </div>
    );
  };
  const renderSuite = (suiteL1) => {
    console.log(suiteL1);
    let modes = Object.keys(suiteL1.tests);
    modes = modes.sort();
    let f = [];
    for (let i of modes) {
      let status = true;
      for (let j in suiteL1.tests[i]) {
        if (suiteL1.tests[i][j].status == false) {
          status = false;
          break;
        }
      }
      f.push({
        testName: i,
        status: status,
      });
    }
    console.log(suiteL1.paymentMode);
    return (
      // <div className={styles.card} onClick={() => openModal(suiteL2)}>
      <div className={styles.card}>
        <h3>{suiteL1.paymentMode}</h3>
        <div className={styles.test_container}>
          {f.map((suiteL2) => renderTest(suiteL2))}
        </div>
      </div>
    );
  };
  console.log(data);
  return (
    <>
      <div className={styles.timestamp}>Last updated: {moment(time).fromNow()}</div>
      <div className={styles.result_container}>
        {data.map((suiteL1) => renderSuite(suiteL1))}
        <Modal closeModal={closeModal} show={showModal} {...modalData} />
      </div>
    </>
  );
}
