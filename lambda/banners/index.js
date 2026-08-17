const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

function live(banner, now) {
  if (!banner.isActive) return false;
  const start = new Date(banner.startDate);
  const end = new Date(banner.endDate);
  return now >= start && now <= end;
}

exports.handler = async () => {
  const result = await db.send(new ScanCommand({ TableName: process.env.BANNERS_TABLE }));
  const now = new Date();
  const banners = (result.Items || []).filter((item) => live(item, now)).sort((a, b) => b.priority - a.priority);
  return {
    statusCode: 200,
    headers: { "content-type": "application/json", "access-control-allow-origin": process.env.ALLOWED_ORIGIN || "*" },
    body: JSON.stringify({ banners }),
  };
};
