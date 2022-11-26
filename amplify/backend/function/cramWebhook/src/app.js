/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_COVERAI_GRAPHQLAPIIDOUTPUT
	API_COVERAI_GRAPHQLAPIENDPOINTOUTPUT
	API_COVERAI_GRAPHQLAPIKEYOUTPUT
	STRIPE_ENDPOINT
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk")
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware")
const bodyParser = require("body-parser")
const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_API_KEY)
// const endpointSecret = process.env.STRIPE_ENDPOINT
const endpointSecret =
  "whsec_17b4c8caf9a34d5374052cfa76b1d6a27b9ced7a716b69c371cccbecc56799d6"

AWS.config.update({ region: process.env.TABLE_REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()

let tableName = ""
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV
}

const userIdPresent = false // TODO: update in case is required to use that definition
const partitionKeyName = ""
const partitionKeyType = ""
const sortKeyName = ""
const sortKeyType = ""
const hasSortKey = sortKeyName !== ""
const path = "/cram"
const UNAUTH = "UNAUTH"
const hashKeyPath = "/:" + partitionKeyName
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : ""

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param)
    default:
      return param
  }
}

app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf.toString()
    },
  })
)

/********************************
 * HTTP Get method for list objects *
 ********************************/

// app.get(path + hashKeyPath, function (req, res) {
//   const condition = {}
//   condition[partitionKeyName] = {
//     ComparisonOperator: "EQ",
//   }

//   if (userIdPresent && req.apiGateway) {
//     condition[partitionKeyName]["AttributeValueList"] = [
//       req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH,
//     ]
//   } else {
//     try {
//       condition[partitionKeyName]["AttributeValueList"] = [
//         convertUrlType(req.params[partitionKeyName], partitionKeyType),
//       ]
//     } catch (err) {
//       res.statusCode = 500
//       res.json({ error: "Wrong column type " + err })
//     }
//   }

//   let queryParams = {
//     TableName: tableName,
//     KeyConditions: condition,
//   }

//   dynamodb.query(queryParams, (err, data) => {
//     if (err) {
//       res.statusCode = 500
//       res.json({ error: "Could not load items: " + err })
//     } else {
//       res.json(data.Items)
//     }
//   })
// })

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

// app.get(path + "/object" + hashKeyPath + sortKeyPath, function (req, res) {
//   const params = {}
//   if (userIdPresent && req.apiGateway) {
//     params[partitionKeyName] =
//       req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH
//   } else {
//     params[partitionKeyName] = req.params[partitionKeyName]
//     try {
//       params[partitionKeyName] = convertUrlType(
//         req.params[partitionKeyName],
//         partitionKeyType
//       )
//     } catch (err) {
//       res.statusCode = 500
//       res.json({ error: "Wrong column type " + err })
//     }
//   }
//   if (hasSortKey) {
//     try {
//       params[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType)
//     } catch (err) {
//       res.statusCode = 500
//       res.json({ error: "Wrong column type " + err })
//     }
//   }

//   let getItemParams = {
//     TableName: tableName,
//     Key: params,
//   }

//   dynamodb.get(getItemParams, (err, data) => {
//     if (err) {
//       res.statusCode = 500
//       res.json({ error: "Could not load items: " + err.message })
//     } else {
//       if (data.Item) {
//         res.json(data.Item)
//       } else {
//         res.json(data)
//       }
//     }
//   })
// })

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, function (request, response) {
  console.log("request.headers", request.headers)
  console.log("request.body", request.body)
  // if (userIdPresent) {
  //   request.body["userId"] =
  //     request.apiGateway.event.requestContext.identity.cognitoIdentityId ||
  //     UNAUTH
  // }

  const sig = request.headers["stripe-signature"]
  let event
  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret)
    console.log(event)
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event
  switch (event.type) {
    case "invoice.payment_succeeded":
      const invoice = event.data.object
      // Then define and call a function to handle the event invoice.payment_succeeded
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send()

  // let putItemParams = {
  //   TableName: tableName,
  //   Item: req.body,
  // }
  // dynamodb.put(putItemParams, (err, data) => {
  //   if (err) {
  //     res.statusCode = 500
  //     res.json({ error: err, url: req.url, body: req.body })
  //   } else {
  //     res.json({ success: "post call succeed!", url: req.url, data: data })
  //   }
  // })
})

app.listen(4242, function () {
  console.log("App started in port 4242")
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
