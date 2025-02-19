export default function handler(req, res) {
  res.status(200).json([
      {
        "paymentMode": "CC",
        "timeTaken": 22860,
        "testPassed": 2,
        "totalTests": 2,
        "averageTimePerTest": 11430,
        "tests": {
          "nonseamless": [
            {
              "status": true,
              "timeTaken": 16569,
              "steps": [
                {
                  "step": "UPI loader page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": "Error: locator.click: Timeout 5000ms exceeded.\nCall log:\n  - waiting for getByTestId('closeWithoutSave')\n"
                },
                {
                  "step": "PG page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "OTP submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "Mastercard"
            }
          ],
          "seamless": [
            {
              "status": true,
              "timeTaken": 6291,
              "steps": [
                {
                  "step": "PG page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "OTP submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "Mastercard"
            }
          ]
        }
      },
      {
        "paymentMode": "DC",
        "timeTaken": 19564,
        "testPassed": 2,
        "totalTests": 2,
        "averageTimePerTest": 9782,
        "tests": {
          "nonseamless": [
            {
              "status": true,
              "timeTaken": 12871,
              "steps": [
                {
                  "step": "UPI loader page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": "Error: locator.click: Timeout 5000ms exceeded.\nCall log:\n  - waiting for getByTestId('closeWithoutSave')\n"
                },
                {
                  "step": "PG page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "OTP submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "VISA"
            }
          ],
          "seamless": [
            {
              "status": true,
              "timeTaken": 6693,
              "steps": [
                {
                  "step": "PG page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "OTP submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "VISA"
            }
          ]
        }
      },
      {
        "paymentMode": "CASH",
        "timeTaken": 6428,
        "testPassed": 1,
        "totalTests": 2,
        "averageTimePerTest": 3214,
        "tests": {
          "nonseamless": [
            {
              "status": true,
              "timeTaken": 5070,
              "steps": [
                {
                  "step": "UPI loader page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Wallet selected",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": "Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'PROCEED' }) resolved to 12 elements:\n    1) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-AMON').getByRole('button', { name: 'PROCEED' })\n    2) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-AMZPAY').getByRole('button', { name: 'PROCEED' })\n    3) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-BFL').getByRole('button', { name: 'PROCEED' })\n    4) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-FREC').getByRole('button', { name: 'PROCEED' })\n    5) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-IDM').getByRole('button', { name: 'PROCEED' })\n    6) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-ITZC').getByRole('button', { name: 'PROCEED' })\n    7) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-JIOM').getByRole('button', { name: 'PROCEED' })\n    8) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-MOBIKWIK').getByRole('button', { name: 'PROCEED' })\n    9) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-PAYZP').getByRole('button', { name: 'PROCEED' })\n    10) \u003Cbutton type=\"button\" class=\"common-btn\"\u003EPROCEED\u003C/button\u003E aka getByTestId('item-PAYTM').getByRole('button', { name: 'PROCEED' })\n    ...\n\nCall log:\n  - waiting for getByRole('button', { name: 'PROCEED' })\n"
                }
              ],
              "testName": "AMON"
            }
          ],
          "seamless": [
            {
              "status": true,
              "timeTaken": 1358,
              "steps": [
                {
                  "step": "PG page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "OTP submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Simulator page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Simulated success response",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "AMON"
            }
          ]
        }
      },
      {
        "paymentMode": "NB",
        "timeTaken": 10890,
        "testPassed": 1,
        "totalTests": 2,
        "averageTimePerTest": 5445,
        "tests": {
          "nonseamless": [
            {
              "status": true,
              "timeTaken": 8719,
              "steps": [
                {
                  "step": "Checkout page loaded ( L1 ) page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Netbanking Checkout page loaded ( L2 )",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Selected AXIB from the Netbanking list",
                  "status": true,
                  "logs": "Error: locator.click: Timeout 5000ms exceeded.\nCall log:\n  - waiting for getByTestId('net-banking-list-item-AXIB').first()\n"
                }
              ],
              "testName": "AXIB"
            }
          ],
          "seamless": [
            {
              "status": true,
              "timeTaken": 2171,
              "steps": [
                {
                  "step": "PG page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Simulated page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Simulate Success Response",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "AXIB"
            }
          ]
        }
      },
      {
        "paymentMode": "UPI",
        "timeTaken": 51191,
        "testPassed": 2,
        "totalTests": 2,
        "averageTimePerTest": 25595.5,
        "tests": {
          "nonseamless": [
            {
              "status": true,
              "timeTaken": 28780,
              "steps": [
                {
                  "step": "Checkout page loaded ( L1 ) page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "UPI Checkout page loaded ( L2 )",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "UPI Checkout page loaded ( L2 )",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "VPA entered submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "UPI Checkout page loaded ( L2 )",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "UPI Checkout page loaded ( L2 )",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "UPI loader page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Simulator page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "UPI - 999999999@upi"
            }
          ],
          "seamless": [
            {
              "status": true,
              "timeTaken": 22411,
              "steps": [
                {
                  "step": "UPI loader page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Credentials submitted",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Simulator page loaded",
                  "status": true,
                  "logs": ""
                },
                {
                  "step": "Response validated",
                  "status": true,
                  "logs": ""
                }
              ],
              "testName": "UPI - 999999999@upi"
            }
          ]
        }
      }
    ]);
}
