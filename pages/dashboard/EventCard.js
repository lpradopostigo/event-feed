import { Card, Typography, Layout } from "antd";

const { Text, Paragraph } = Typography;

export default function EventCard({
  data: { id, title, description, startDate, endDate },
}) {
  const dateToString = (date) =>
    new Date(date).toLocaleString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

  return (
    <Card title={title} extra={<a href={`/event/${id}`}>Details</a>}>
      <div className={"flex flex-column"}>
        <Text>From: {dateToString(startDate)}</Text>
        <Text>To: {dateToString(endDate)}</Text>
      </div>

      <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
    </Card>
  );
}
