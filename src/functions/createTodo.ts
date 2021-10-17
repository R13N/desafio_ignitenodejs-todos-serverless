import { document } from "../utils/dynamodbClient";

import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidv4 } from "uuid";
import * as dayjs from "dayjs";

interface ICreateTodo {
  id: string;
  title: string;
  deadLine: string;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const {
    id,
    title,
    deadLine,
  } = JSON.parse(event.body) as ICreateTodo;

  await document.put({
    TableName: "todos",
    Item: {
      id: uuidv4(),
      user_id: id,
      title,
      done: false,
      deadLine: dayjs(deadLine).format("DD/MM/YYYY"),
    }
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Todo created",
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }
}