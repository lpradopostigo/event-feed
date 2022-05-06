import { Card, Typography } from "antd";

const { Text, Paragraph } = Typography;

export default function EventCard({ data: { id, title, description, date } }) {
  return (
    <Card title={title} extra={<a href={`/event/${id}`}>Details</a>}>
      <Text>
        {new Date(date).toLocaleString([], {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </Text>
      <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
    </Card>
  );
}
