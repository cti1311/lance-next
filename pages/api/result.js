export default function handler(req, res) {
  res.status(200).json([
    {
      paymentMode: "UPI",
      timeTaken: 13004,
      testPassed: 0,
      totalTests: 2,
      averageTimePerTest: 6502,
      tests: {
        seamless: [
          {
            status: false,
            timeTaken: 3003,
            steps: [
              {
                step: "UPI loader page loaded",
                status: false,
                logs: 'Error: page.waitForURL: Timeout 3000ms exceeded.\n=========================== logs ===========================\nwaiting for navigation to "https://apitest.payu.in/public/#/*/upiLoader" until "load"\n============================================================',
              },
            ],
            testName: "UPI - 999999999@upi",
          },
        ],
        nonseamless: [
          {
            status: false,
            timeTaken: 10001,
            steps: [
              {
                step: "Checkout page loaded ( L1 ) page loaded",
                status: false,
                logs: 'Error: page.waitForURL: Timeout 10000ms exceeded.\n=========================== logs ===========================\nwaiting for navigation to "https://apitest.payu.in/public/#/*" until "load"\n============================================================',
              },
            ],
            testName: "UPI - 999999999@upi",
          },
        ],
      },
    },
    {
      paymentMode: "CASH",
      timeTaken: 12217,
      testPassed: 1,
      totalTests: 2,
      averageTimePerTest: 6108.5,
      tests: {
        nonseamless: [
          {
            status: false,
            timeTaken: 10005,
            steps: [
              {
                step: "UPI loader page loaded",
                status: false,
                logs: 'Error: page.waitForURL: Timeout 10000ms exceeded.\n=========================== logs ===========================\nwaiting for navigation to "https://apitest.payu.in/public/#/*" until "load"\n============================================================',
              },
            ],
            testName: "AMON",
          },
        ],
        seamless: [
          {
            status: true,
            timeTaken: 2212,
            steps: [
              { step: "PG page loaded", status: true, logs: "" },
              { step: "OTP submitted", status: true, logs: "" },
              { step: "Simulator page loaded", status: true, logs: "" },
              { step: "Simulated success response", status: true, logs: "" },
              { step: "Response validated", status: true, logs: "" },
            ],
            testName: "AMON",
          },
        ],
      },
    },
    {
      paymentMode: "NB",
      timeTaken: 5490,
      testPassed: 2,
      totalTests: 2,
      averageTimePerTest: 2745,
      tests: {
        seamless: [
          {
            status: true,
            timeTaken: 2267,
            steps: [
              { step: "PG page loaded", status: true, logs: "" },
              { step: "Credentials submitted", status: true, logs: "" },
              { step: "Simulated page loaded", status: true, logs: "" },
              { step: "Simulate Success Response", status: true, logs: "" },
              { step: "Response validated", status: true, logs: "" },
            ],
            testName: "AXIB",
          },
        ],
        nonseamless: [
          {
            status: true,
            timeTaken: 3223,
            steps: [
              {
                step: "Checkout page loaded ( L1 ) page loaded",
                status: true,
                logs: "",
              },
              {
                step: "Netbanking Checkout page loaded ( L2 )",
                status: true,
                logs: "",
              },
              {
                step: "Selected AXIB from the Netbanking list",
                status: true,
                logs: "",
              },
              { step: "Clicked procced button", status: true, logs: "" },
              { step: "PG page loaded", status: true, logs: "" },
              { step: "Credentials submitted", status: true, logs: "" },
              { step: "Simulated page loaded", status: true, logs: "" },
              { step: "Simulate Success Response", status: true, logs: "" },
              { step: "Response validated", status: true, logs: "" },
            ],
            testName: "AXIB",
          },
        ],
      },
    },
    {
      paymentMode: "CC",
      timeTaken: 16892,
      testPassed: 1,
      totalTests: 2,
      averageTimePerTest: 8446,
      tests: {
        nonseamless: [
          {
            status: false,
            timeTaken: 10000,
            steps: [
              {
                step: "UPI loader page loaded",
                status: false,
                logs: 'Error: page.waitForURL: Timeout 10000ms exceeded.\n=========================== logs ===========================\nwaiting for navigation to "https://apitest.payu.in/public/#/*" until "load"\n============================================================',
              },
            ],
            testName: "Mastercard",
          },
        ],
        seamless: [
          {
            status: true,
            timeTaken: 6892,
            steps: [
              { step: "PG page loaded", status: true, logs: "" },
              { step: "OTP submitted", status: true, logs: "" },
              { step: "Response validated", status: true, logs: "" },
            ],
            testName: "Mastercard",
          },
        ],
      },
    },
    {
      paymentMode: "DC",
      timeTaken: 14291,
      testPassed: 1,
      totalTests: 2,
      averageTimePerTest: 7145.5,
      tests: {
        seamless: [
          {
            status: false,
            timeTaken: 5009,
            steps: [
              {
                step: "PG page loaded",
                status: false,
                logs: 'Error: page.waitForURL: Timeout 5000ms exceeded.\n=========================== logs ===========================\nwaiting for navigation to "https://acssimuat.payubiz.in/pg/Cyber3DS/home" until "load"\n============================================================',
              },
            ],
            testName: "VISA",
          },
        ],
        nonseamless: [
          {
            status: true,
            timeTaken: 9282,
            steps: [
              { step: "UPI loader page loaded", status: true, logs: "" },
              { step: "Credentials submitted", status: true, logs: "" },
              { step: "Credentials submitted", status: true, logs: "" },
              { step: "Credentials submitted", status: true, logs: "" },
              { step: "Credentials submitted", status: true, logs: "" },
              { step: "PG page loaded", status: true, logs: "" },
              { step: "OTP submitted", status: true, logs: "" },
              { step: "Response validated", status: true, logs: "" },
            ],
            testName: "VISA",
          },
        ],
      },
    },
  ]);
}
