import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";

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
  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/result");
    const data = await res.json();
    setData(data.suites);
    console.log(data);
  }, []);

  const renderTest = (specs) => {
    return (
      <div className={styles.test}>
        <p>{specs.title}</p>
        <div>{specs.ok ? <AiFillCheckCircle color="green" size="1.2em"/> : <AiFillCloseCircle color="red" size="1.2em"/>}</div>
      </div>
    );
  };
  const renderSuite = (suiteL1) => {
    let f = suiteL1.suites?.map((suiteL2) => {
      return (
        <div className={styles.card} onClick={() => openModal(suiteL2)}>
          <h3>{suiteL2.title}</h3>
          <div className={styles.test_container}>
            {suiteL2.suites?.map((specs) => renderTest(specs))}
          </div>
        </div>
      );
    })
    return f
  };

  return (
    <div className={styles.result_container}>
      {data.map((suiteL1) => renderSuite(suiteL1))}
      <Modal closeModal={closeModal} show={showModal} {...modalData} />
    </div>
  );
}
